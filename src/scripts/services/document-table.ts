import pageServices from './page-services';
import _folderData from '../sample-data/sample-data';
import documentTableConstants from '../constant/document-table';

const documentTableServices = {
  getFolderDirectoryFromQueryString: () => {
    const folderDirectory = pageServices.getURLParams('directory');
    if (folderDirectory === null || folderDirectory === 'root') {
      return 'root';
    }
    return folderDirectory;
  },
  getFolderIdFromSessionStorage: (_folderDirectory: string) => {
    return pageServices.getFolderDataFromSessionStorage(
      _folderDirectory,
    );
  },
  getRootFolderData: () => {
    return _folderData;
  },
  getCurrentFolderData: () => {
    const folderDirectory = documentTableServices.getFolderDirectoryFromQueryString();
    if (folderDirectory === 'root') {
      return _folderData;
    }
    return pageServices.getFolderDataFromSessionStorage(
      folderDirectory,
    );
  },
  updateFolderDirectoryInQueryString: (_directoryName: string) => {
    const folderDirectory = documentTableServices.getFolderDirectoryFromQueryString();
    const newFolderDirectory = `${folderDirectory}/${_directoryName}`;
    window.history.pushState(
      null,
      null,
      `?directory=${newFolderDirectory}`,
    );
  },
  setFolderDirectoryToSessionStorage: (_folderData: any) => {
    const currentFolderDirectory = documentTableServices.getFolderDirectoryFromQueryString();
    pageServices.setDataToSessionStorage(
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
