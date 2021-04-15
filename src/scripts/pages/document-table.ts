import classes from '../classes/_index';
import documentTableConstants from '../constant/document-table';
import documentTableServices from '../services/document-table';
import itemIconCSSClasses from '../constant/item-icon-css-class';

function setNewItemModalInfo(_itemInfo: {
	title: string;
	name: string;
	type: string;
}) {
	document.getElementById('new-item-modal-title').innerHTML =
		_itemInfo.title;

	document.getElementById('new-item-name-label').innerHTML =
		_itemInfo.name;

	(<HTMLInputElement>document.getElementById("new-item-name")).value = '';

	if (_itemInfo.type === documentTableConstants.itemType.folder) {
		document
			.getElementById('item-type')
			.setAttribute('data-item-type', documentTableConstants.itemType.folder);
	} else {
		document
			.getElementById('item-type')
			.setAttribute('data-item-type', documentTableConstants.itemType.file);
	}
}

function createANewFolderEvent() {
	// when click on create a new folder button
	document
		.getElementsByClassName('create-new-folder-option')[0]
		.addEventListener('click', () => {
			setNewItemModalInfo({
				title: 'Create a new folder',
				name: 'Folder name',
				type: documentTableConstants.itemType.folder,
			});
		});
}

function createANewFileEvent() {
	// when click on create a new file button
	document
		.getElementsByClassName('create-new-file-option')[0]
		.addEventListener('click', () => {
			setNewItemModalInfo({
				title: 'Create a new file',
				name: 'File name',
				type: documentTableConstants.itemType.file,
			});
		});
}

function createANewItemEvent() {
	createANewFolderEvent();
	createANewFileEvent();
}
function getItemInputData() {			// get the item info
	// -- item name
	const name = <HTMLInputElement>document
		.getElementById('new-item-name');
	// -- item type
	const type = document
		.getElementById('item-type')
		.getAttribute('data-item-type');

	if (name.value === '') {
		return;
	} else {
		return { name, type };
	}
}

function setNewItemData(_itemInputData: { name: HTMLInputElement, type: string }) {
	let id = '';
	let name = _itemInputData.name.value;
	let extension = '';
	if (_itemInputData.type === documentTableConstants.itemType.folder) {
		id = 'folder-' + documentTableServices.makeTempId(5);
	} else {
		id = 'file-' + documentTableServices.makeTempId(5);
		// file does have extension
		if (name.lastIndexOf('.') !== -1) {
			extension = name.split('.').pop();
			name = name.substring(0, name.lastIndexOf('.'));
		}
	}
	return { id, name, extension };
}

function createItemIcon(_extension: string) {
	const icon = document.createElement('i');
	if (_extension !== undefined) {
		switch (_extension) {
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

/*
	_item: a folder or a file object
*/
function renderItemTypeData(_item: any) {
	// item type
	let td = document.createElement('td');
	td.setAttribute('class', 'item-type');
	td.setAttribute('data-label', 'File Type');
	const icon = createItemIcon(_item.extension);
	td.appendChild(icon);
	return td;
}

/*
	_item: a folder or a file object
*/
function clickOnAFolderEvent(_item: any) {
	documentTableServices.updateFolderDirectoryInQueryString(_item.name);
	let clickedFolderData: any = documentTableServices.searchFolderById(documentTableServices.getRootFolderData(), _item.id);
	console.log('clickedFolderData id:' + _item.id);
	console.log('clickedFolderData: ', clickedFolderData);
	documentTableServices.setFolderDirectoryToSessionStorage(JSON.stringify(clickedFolderData));
	renderTabledata(clickedFolderData);
}

/*
	_item: a folder or a file object
*/
function renderItemNameData(_item: any) {
	// item type
	let td = document.createElement('td');
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
			clickOnAFolderEvent(_item);
		});
	}
	return td;
}

/*
	_item: a folder or a file object
*/
function renderTableRowData(_item: any) {
	const tbody = document
		.getElementsByClassName('document-table')[0]
		.getElementsByTagName('tbody')[0];
	const tr = document.createElement('tr');
	tr.appendChild(renderItemTypeData(_item));
	tr.appendChild(renderItemNameData(_item));
	/*
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
		*/

	tbody.appendChild(tr);
};

function displayItems(itemList: Array<object>) {
	for (
		let itemIndex = 0;
		itemIndex < itemList.length;
		itemIndex += 1
	) {
		renderTableRowData(itemList[itemIndex]);
	}
}

function renderTabledata(folderData: any) {
	// Find tbody element
	const tbody = document
		.getElementsByClassName('document-table')[0]
		.getElementsByTagName('tbody')[0];
	tbody.innerHTML = '';
	displayItems(folderData.folders);
	displayItems(folderData.files);
}

function saveANewItemEvent() {
	// save a new item
	document
		.getElementsByClassName('save-new-item')[0]
		.addEventListener('click', () => {
			// get the current folder data
			let currentFolderData: any = documentTableServices.getCurrentFolderData();
			let itemInputData = getItemInputData();
			let newItemData = setNewItemData(itemInputData);
			if (itemInputData.type === documentTableConstants.itemType.folder) {
				const folderItem = new classes.Folder(newItemData.id, newItemData.name);
				currentFolderData.folders.push(folderItem);
			} else {
				const fileItem = new classes.File(newItemData.id, newItemData.name, newItemData.extension);
				currentFolderData.files.push(fileItem);
			}
			renderTabledata(currentFolderData);
		});
}

function loadMenuBarEvents() {
	createANewItemEvent();
	saveANewItemEvent();
}

function loadTableData() {
	let currentFolderData = documentTableServices.getCurrentFolderData();
	renderTabledata(currentFolderData);
}

function loadTableEvents() {
	loadTableData();
}

const documentTable = {
	loadEvents: () => {
		loadMenuBarEvents();
		loadTableEvents();
	},
}

export default documentTable;
