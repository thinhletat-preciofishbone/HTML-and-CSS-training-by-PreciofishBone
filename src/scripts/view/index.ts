import sampleData from '../sample-data/sample-data';
import itemIconCSSClasses from '../constant/item-icon-css-class';

const targetfolder: any = sampleData;

export function getCurrentFolderData() {
  return targetfolder;
}

function createItemIcon(_item: any) {
  const icon = document.createElement('i');
  if (_item.extension !== undefined) {
    switch (_item.extension) {
      case 'txt':
        icon.setAttribute('class', itemIconCSSClasses.text);
        break;
      case 'doc':
      case 'docx':
        icon.setAttribute('class', itemIconCSSClasses.word);
        break;
      case 'xml':
      case 'csv':
      case 'xlsx':
        icon.setAttribute('class', itemIconCSSClasses.excel);
        break;
      case 'exe':
        icon.setAttribute('class', itemIconCSSClasses.program);
        break;
      default:
        icon.setAttribute('class', itemIconCSSClasses.file);
    }
  } else {
    icon.setAttribute('class', itemIconCSSClasses.folder);
  }
  return icon;
}

function createItemRecord(_item: any) {
  const tbody = document
    .getElementsByClassName('document-table')[0]
    .getElementsByTagName('tbody')[0];
  const tr = document.createElement('tr');

  // item type
  let td = document.createElement('td');
  td.setAttribute('class', 'item-type');
  td.setAttribute('data-label', 'File Type');
  const icon = createItemIcon(_item);
  td.appendChild(icon);
  tr.appendChild(td);

  // item name
  td = document.createElement('td');
  td.setAttribute('class', 'item-name');
  td.setAttribute('data-label', 'Name');
  // a file
  if (_item.extension !== undefined) {
    if (_item.extension !== '') {
      td.innerHTML = `${_item.name}.${_item.extension}`;
    } else {
      td.innerHTML = `${_item.name}`;
    }
  } else {
    // a folder
    td.className += ' folder-item';
    td.innerHTML = `${_item.name}`;
    td.setAttribute('data-id', _item.id);
    td.addEventListener('click', () => {
      changeDirectory(_item.id, _item.name);

      // write to session storage
      const urlParams = new URLSearchParams(window.location.search);
      window.sessionStorage.setItem(
        urlParams.get('directory'),
        JSON.stringify(_item),
      );
    });
  }
  tr.appendChild(td);

  // modified time
  td = document.createElement('td');
  td.setAttribute('class', 'modified-time');
  td.setAttribute('data-label', 'Modified');
  td.innerHTML = `${_item.modifiedTime}`;
  tr.appendChild(td);

  // modified by
  td = document.createElement('td');
  td.setAttribute('class', 'modified-by');
  td.setAttribute('data-label', 'Modified By');
  td.innerHTML = `${_item.modifiedBy}`;
  tr.appendChild(td);

  // new column
  td = document.createElement('td');
  tr.appendChild(td);

  tbody.appendChild(tr);
}

function displayItems(itemList: Array<object>) {
  for (
    let itemIndex = 0;
    itemIndex < itemList.length;
    itemIndex += 1
  ) {
    createItemRecord(itemList[itemIndex]);
  }
}

function searchDirectoryById(
  _data: any,
  _directoryId: string = 'folder-root',
) {
  if (_data.id === _directoryId) {
    return _data;
  }
  for (const child of _data.folders) {
    const res = searchDirectoryById(child, _directoryId);
    if (res) {
      return res;
    }
  }
}

function renderDirectory(folderData: any) {
  // Find tbody element
  const tbody = document
    .getElementsByClassName('document-table')[0]
    .getElementsByTagName('tbody')[0];
  tbody.innerHTML = '';

  displayItems(folderData.folders);
  displayItems(folderData.files);
}

function changeDirectory(
  _directoryId: string,
  _directoryName: string,
) {
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has('directory')) {
    // append params to url
    urlParams.append('directory', `${'root/'}${_directoryName}`);

    // update the url query
    window.history.pushState(null, null, `?${urlParams.toString()}`);

    // render result again
    renderDirectory(_directoryId);
  } else {
    // append params to url
    const newDirectory = `${urlParams.get(
      'directory',
    )}/${_directoryName}`;
    urlParams.set('directory', newDirectory);
    // update the url query
    window.history.pushState(null, null, `?${urlParams.toString()}`);
    renderDirectory(_directoryId);
  }
}

const view = {
  renderDirectory,
  searchDirectoryById,
  getCurrentFolderData,
};

export default view;
