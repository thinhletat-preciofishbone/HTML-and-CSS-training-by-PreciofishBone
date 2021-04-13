import ready from '../utilities/_helper';
import header from '../components/_header';
import documentTable from '../components/document-table';
import view from '../view/index';
import homePageService from '../services/home-page-services';

function getFolderIdFromLocalStorage(_directorypath: string) {
  return window.localStorage.getItem(_directorypath);
}

ready(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (
    !urlParams.has('directory') ||
    urlParams.get('directory') === 'root'
  ) {
    view.renderDirectory();
  } else {
    const folderId = getFolderIdFromLocalStorage(
      urlParams.get('directory'),
    );
    console.log(folderId);
    view.renderDirectory(folderId);
  }
  header.activateOperations();
  documentTable.activateOperations();
});
