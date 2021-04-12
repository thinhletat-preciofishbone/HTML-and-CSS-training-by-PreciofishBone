import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import header from '../components/_header';
import sampleData from '../sample-data/sample-data';
import itemIconCSSClasses from '../constant/index';

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
      default:
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

  // file type
  let td = document.createElement('td');
  td.setAttribute('class', 'file-type');
  td.setAttribute('data-label', 'File Type');
  const icon = createItemIcon(_item);
  td.appendChild(icon);
  tr.appendChild(td);

  // file name
  td = document.createElement('td');
  td.setAttribute('class', 'file-name');
  td.setAttribute('data-label', 'Name');
  if (_item.extension !== undefined) {
    td.innerHTML = `${_item.name}.${_item.extension}`;
  } else {
    td.innerHTML = `${_item.name}`;
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
function renderDirectory(directory: string) {
  // Find tbody element

  if (directory === 'root') {
    displayItems(sampleData.folders);
    /* Display folders */

    /* Display files */
    displayItems(sampleData.files);
  }
}

ready(() => {
  renderGrid();
  header.activateOperations();
  renderDirectory('root');
});
