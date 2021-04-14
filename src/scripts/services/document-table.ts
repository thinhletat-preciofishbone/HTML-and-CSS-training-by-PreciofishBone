import pageServices from './page-services';

const documentTableServices = {
  getFolderDirectory: () => {
    const folderDirectory = pageServices.getURLParams('directory');
    if (folderDirectory === null || folderDirectory === 'root') {
      return 'root';
    }
    return folderDirectory;
  },
  getFolderIdFromSessionStorage: (_folderDirectory: string) => {
    return pageServices.getDataFromSessionStorage(_folderDirectory);
  },
  getCurrentFolderData: () => {
    const folderDirectory = documentTableServices.getFolderDirectory();
    return pageServices.getDataFromSessionStorage(folderDirectory);
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
