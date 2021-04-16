import classes from '../classes/_index';
import documentTableConstants from '../constant/document-table';
import documentTableServices from '../services/document-table';

const documentTable = {
	setNewItemModalInfo: (_itemInfo: {
		title: string;
		name: string;
		type: string;
	}) => {
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
	},
	createANewFileEvent: () => {
		// when click on create a new folder button
		document
			.getElementsByClassName('create-new-folder-option')[0]
			.addEventListener('click', () => {
				documentTable.setNewItemModalInfo({
					title: 'Create a new folder',
					name: 'Folder name',
					type: documentTableConstants.itemType.folder,
				});
			});
			
	},
	createANewFolderEvent: () => {
		// when click on create a new folder button
		document
			.getElementsByClassName('create-new-file-option')[0]
			.addEventListener('click', () => {
				documentTable.setNewItemModalInfo({
					title: 'Create a new file',
					name: 'File name',
					type: documentTableConstants.itemType.file,
				});
			});
	},
	createANewItemEvent: () => {
		documentTable.createANewFolderEvent();
		documentTable.createANewFileEvent();
	},
	setNewItemData: (_itemInputData: { name: HTMLInputElement, type: string }) => {
		let id = '';
		let name = _itemInputData.name.value;
		let extension = '';
		let type = documentTableConstants.itemType.folder;

		if (_itemInputData.type === documentTableConstants.itemType.folder) {
			id = 'folder-' + documentTableServices.makeTempId(5);
		} else {
			id = 'file-' + documentTableServices.makeTempId(5);

			// file does have extension
			if (name.lastIndexOf('.') !== -1) {
				extension = name.split('.').pop();
				name = name.substring(0, name.lastIndexOf('.'));
			}

			type = documentTableConstants.itemType.file;
		}

		return { id, name, extension, type };
	},
	getItemInputData: () => {
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
	},
	saveANewItemEvent: () => {
		// save a new item
		document
			.getElementsByClassName('save-new-item')[0]
			.addEventListener('click', () => {
				let currentFolderData = documentTableServices.getCurrentFolderData();
				let itemInputData = documentTable.getItemInputData();
				let newItemData = documentTable.setNewItemData(itemInputData);
				let item = {};
				
				if (itemInputData.type === documentTableConstants.itemType.folder) {
					// a folder
					item = new classes.Folder(newItemData.id, newItemData.name);
				} else {
					item = new classes.File(newItemData.id, newItemData.name, newItemData.extension);
				}

				currentFolderData = documentTableServices.addNewItemToCurrentFolderInRootData(documentTableServices.getRootFolderData(), currentFolderData.id, item);
				console.log('currentFolderData after saved: ', currentFolderData);
				documentTable.renderTableData(currentFolderData);

				// we also need to update the current folder's sub-folders and files data in browser storage/database:
				
			});
	},
	loadMenuBarEvents: () => {
		documentTable.createANewItemEvent();
		documentTable.saveANewItemEvent();
	},
	createItemIcon: (_extension: string) => {
		const icon = document.createElement('i');
		const iconCSSClass = documentTableServices.getItemIconCSSClass(_extension);
		icon.setAttribute('class', iconCSSClass);

		return icon;
	},
	renderItemTypeData: (_item: any) => {
		// item type
		let td = document.createElement('td');
		td.setAttribute('class', 'item-type');
		td.setAttribute('data-label', 'File Type');
		const icon = documentTable.createItemIcon(_item.extension);
		td.appendChild(icon);

		return td;
	},
	clickOnAFolderEvent: (_item: any) => {
		documentTableServices.updateFolderDirectoryInQueryString(_item.name);
		let clickedFolderData: any = documentTableServices.searchFolderById(documentTableServices.getRootFolderData(), _item.id);
		console.log('clickedFolderData', clickedFolderData);
		documentTableServices.setFolderDirectoryToBrowserStorage(JSON.stringify(clickedFolderData));
		documentTable.renderTableData(clickedFolderData);
	},
	renderItemNameData: (_item: any) => {
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
				documentTable.clickOnAFolderEvent(_item);
			});
		}

		return td;
	},
	renderItemModifiedTimeData: (_item: any) => {
		// item type
		let td = document.createElement('td');
		td.setAttribute('class', 'modified-time');
		td.setAttribute('data-label', 'Modified');
		td.innerHTML = `${_item.modifiedTime}`;

		return td;
	},
	renderItemModifiedByData: (_item: any) => {
		// item type
		let td = document.createElement('td');
		td.setAttribute('class', 'modified-by');
		td.setAttribute('data-label', 'Modified By');
		td.innerHTML = `${_item.modifiedBy}`;

		return td;
	},
	renderTableRowData: (_item: any) => {
		const tbody = document
			.getElementsByClassName('document-table')[0]
			.getElementsByTagName('tbody')[0];
		const tr = document.createElement('tr');
		tr.appendChild(documentTable.renderItemTypeData(_item));
		tr.appendChild(documentTable.renderItemNameData(_item));
		tr.appendChild(documentTable.renderItemModifiedTimeData(_item));
		tr.appendChild(documentTable.renderItemModifiedByData(_item));
		// new column
		let td = document.createElement('td');
		tr.appendChild(td);	
		tbody.appendChild(tr);
	},
	displayItems: (_itemList: Array<object>) => {
		for (
			let itemIndex = 0;
			itemIndex < _itemList.length;
			itemIndex += 1
		) {
			documentTable.renderTableRowData(_itemList[itemIndex]);
		}
	},
	renderTableData: (folderData: any) => {
		// Find tbody element
		const tbody = document
			.getElementsByClassName('document-table')[0]
			.getElementsByTagName('tbody')[0];
		tbody.innerHTML = '';
		documentTable.displayItems(folderData.subFolderItems);
		documentTable.displayItems(folderData.fileItems);
	},
	loadTableData: () => {
		let currentFolderData = documentTableServices.getCurrentFolderData();
		// if current directory is root, update the query and add a key - value pair
		if (documentTableServices.isRootFolder(currentFolderData) === true) {
			documentTableServices.setFolderDirectoryToBrowserStorage(JSON.stringify(currentFolderData));
		}
		documentTable.renderTableData(currentFolderData);
	},
	loadTableEvents: () => {
		documentTable.loadTableData();
	},
	loadEvents: () => {
		documentTable.loadMenuBarEvents();
		documentTable.loadTableEvents();
	},
}

export default documentTable;
