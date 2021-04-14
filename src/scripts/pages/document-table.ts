import view from '../view/index';
import sampleData from '../sample-data/sample-data';
import classes from '../classes/_index';
import DocumentTableConstants from '../constant/document-table';
import documentTableServices from '../services/document-table';

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

	if (_itemInfo.type === DocumentTableConstants.itemType.folder) {
		document
			.getElementById('item-type')
			.setAttribute('data-item-type', DocumentTableConstants.itemType.folder);
	} else {
		document
			.getElementById('item-type')
			.setAttribute('data-item-type', DocumentTableConstants.itemType.file);
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
				type: DocumentTableConstants.itemType.folder,
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
				type: DocumentTableConstants.itemType.file,
			});
		});
}

function createANewItemEvent() {
	createANewFolderEvent();
	createANewFileEvent();
}

function saveANewItemEvent() {
	// save a new item
	document
		.getElementsByClassName('save-new-item')[0]
		.addEventListener('click', () => {
			// get the current folder data
			
			let currentFolderData: any = documentTableServices.getCurrentFolderData();

			// get the item info
			// -- item name
			const itemNameInput = <HTMLInputElement>document
				.getElementById('new-item-name');
			if (itemNameInput.value === '') {
				return;
			}
			// -- item type
			const itemTypeInput = document
				.getElementById('item-type')
				.getAttribute('data-item-type');

			// create item data
			let newitemId = '';
			let newItemName = '';
			if (itemTypeInput === DocumentTableConstants.itemType.folder) {
				newitemId = 'folder-' + documentTableServices.makeTempId(5);
				newItemName = itemNameInput.value;
				const folderItem = new classes.Folder(newitemId, newItemName);
				currentFolderData.folders.push(folderItem);
			} else {
				newitemId = 'file-' + documentTableServices.makeTempId(5);
				newItemName = itemNameInput.value;
				let fileExtension = '';
				// file does have extension
				if (newItemName.lastIndexOf('.') !== -1) {
					fileExtension = newItemName.split('.').pop();
					newItemName = newItemName.substring(0, newItemName.lastIndexOf('.'));
				}
				const fileItem = new classes.File(newitemId, newItemName, fileExtension);
				currentFolderData.files.push(fileItem);
			}

			// get the current directory
			const urlParams = new URLSearchParams(window.location.search);
			const directory = urlParams.get('directory');

			if (!urlParams.has('directory') ||
				urlParams.get('directory') === 'root') {
				view.renderDirectory();
			} else {
				console.log('currentFolderData.id', currentFolderData.id);
				view.renderDirectory(currentFolderData.id);
			}
		});
}

function loadMenuBarEvents() {
  createANewItemEvent();
  saveANewItemEvent();
}

function loadTableEvents() {
}

const header = {
	loadEvents: () => {
    loadMenuBarEvents();
    loadTableEvents();
    const folderDirectory = documentTableServices.getFolderDirectory();
    if (folderDirectory === 'root') {
      view.renderDirectory();
    } else {
      const folderId = documentTableServices.getFolderIdFromSessionStorage(
        folderDirectory,
      );
      view.renderDirectory(folderId);
    }
	},
};

export default header;
