import pageServices from './page-services';
import rootData from '../sample-data/sample-data';
import documentTableConstants from '../constant/document-table';
import itemIconCSSClasses from '../constant/item-icon-css-class';

const documentTableServices = {
  getFolderDirectoryFromQueryString: () => {
    const folderDirectory = pageServices.getURLParams('directory');
    if (
      folderDirectory === null ||
      documentTableServices.isRootDirectory(folderDirectory)
    ) {
      return documentTableConstants.rootDirectory;
    }
    return folderDirectory;
  },
  getFolderIdFromBrowserStorage: (_folderDirectory: string) => {
    return pageServices.getFolderDataFromBrowserStorage(
      _folderDirectory,
    );
  },
  getRootFolderData: () => {
    return rootData;
  },
  isRootFolder: (_folderData: any): boolean => {
    if (_folderData.id === rootData.id) {
      return true;
    }
    return false;
  },
  isRootDirectory: (_folderDirectory: string): boolean => {
    if (_folderDirectory === documentTableConstants.rootDirectory) {
      return true;
    }
    return false;
  },
  getCurrentFolderData: () => {
    const currentFolderDirectory = documentTableServices.getFolderDirectoryFromQueryString();
    if (
      documentTableServices.isRootDirectory(currentFolderDirectory)
    ) {
      return rootData;
    }
    return pageServices.getFolderDataFromBrowserStorage(
      currentFolderDirectory,
    );
  },
  getItemIconCSSClass: (_extension: string) => {
    if (_extension !== undefined) {
      switch (_extension) {
        case 'txt':
          return itemIconCSSClasses.text;
        case 'doc':
        case 'docx':
          return itemIconCSSClasses.word;
        case 'xml':
        case 'csv':
        case 'xlsx':
          return itemIconCSSClasses.excel;
        case 'exe':
          return itemIconCSSClasses.program;
        default:
          return itemIconCSSClasses.file;
      }
    } else {
      return itemIconCSSClasses.folder;
    }
  },
  updateFolderDirectoryInQueryString: (
    _directoryName: string = documentTableConstants.rootDirectory,
  ) => {
    const currentFolderDirectory = documentTableServices.getFolderDirectoryFromQueryString();
    const newFolderDirectory = `${currentFolderDirectory}/${_directoryName}`;
    window.history.pushState(
      null,
      null,
      `?directory=${newFolderDirectory}`,
    );
  },
  // thêm một key (directory) - value (folder data) với folder directory hiện tại
  setFolderDirectoryToBrowserStorage: (_folderData: any) => {
    const currentFolderDirectory = documentTableServices.getFolderDirectoryFromQueryString();
    console.log('currentFolderDirectory: ', currentFolderDirectory);
    pageServices.setDataToBrowserStorage(
      currentFolderDirectory,
      _folderData,
    );
  },
  addNewItemToCurrentFolderInRootData: (
    _folderData: any,
    _folderId: string,
    _newItemData: any,
  ) => {
    if (_folderData.id === _folderId) {
      if (
        (_newItemData.type = documentTableConstants.itemType.folder)
      ) {
        _folderData.subFolderItems.push(_newItemData);
      } else {
        _folderData.fileItems.push(_newItemData);
      }
      return _folderData;
    }
    for (const child of _folderData.subFolderItems) {
      const result = documentTableServices.addNewItemToCurrentFolderInRootData(
        child,
        _folderId,
        _newItemData,
      );
      if (result) {
        return result;
      }
    }
  },
  searchFolderById: (
    _folderData: any,
    _folderId: string = 'folder-root',
  ) => {
    if (_folderData.id === _folderId) {
      return _folderData;
    }
    for (const child of _folderData.subFolderItems) {
      const result = documentTableServices.searchFolderById(
        child,
        _folderId,
      );
      if (result) {
        return result;
      }
    }
  },
  makeTempId: (_length: number) => {
    const result = [];
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < _length; i += 1) {
      result.push(
        characters.charAt(
          Math.floor(Math.random() * charactersLength),
        ),
      );
    }
    return result.join('');
  },
};

export default documentTableServices;
