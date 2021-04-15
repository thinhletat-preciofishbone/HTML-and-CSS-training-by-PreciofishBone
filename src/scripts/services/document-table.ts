import pageServices from './page-services';
import rootData from '../sample-data/sample-data';

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
    return rootData;
  },
  getCurrentFolderData: () => {
    const folderDirectory = documentTableServices.getFolderDirectoryFromQueryString();
    if (folderDirectory === 'root') {
      return rootData;
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
  searchFolderById: (
    _folderData: any,
    _folderId: string = 'folder-root',
  ) => {
    if (_folderData.id === _folderId) {
      return _folderData;
    }
    for (const child of _folderData.folders) {
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
    for (let i = 0; i < length; i++) {
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
