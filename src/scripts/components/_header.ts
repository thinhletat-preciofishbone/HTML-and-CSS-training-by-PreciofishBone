import view from '../view/index';
import sampleData from '../sample-data/sample-data';
import classes from '../classes/_index';

function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

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

	if (_itemInfo.type === 'folder') {
		document
			.getElementById('item-type')
			.setAttribute('data-item-type', 'folder');
	} else {
		document
			.getElementById('item-type')
			.setAttribute('data-item-type', 'file');
	}
}

function activateNavigationMenuOperations() {
	// when click on create a new folder button
	document
		.getElementsByClassName('create-new-folder-option')[0]
		.addEventListener('click', () => {
			const item = {
				title: 'Create a new folder',
				name: 'Folder name',
				type: 'folder',
			};
			setNewItemModalInfo(item);
		});

	// when click on create a new file button
	document
		.getElementsByClassName('create-new-file-option')[0]
		.addEventListener('click', () => {
			const item = {
				title: 'Create a new file',
				name: 'File name',
				type: 'file',
			};
			setNewItemModalInfo(item);
		});
	
	// save a new item
	document
		.getElementsByClassName('save-new-item')[0]
		.addEventListener('click', () => {
			// get the current folder data
			let currentFolderData = view.getCurrentFolderData();

			// get the item info
			// -- item name
			const itemName = <HTMLInputElement>document
			.getElementById('new-item-name');
			console.log('item name: ', itemName.value);
			if (itemName.value === '') {
				return;
			}
			// -- item type
			const itemType = document
				.getElementById('item-type')
				.getAttribute('data-item-type');

			// create item data
			let id = '';
			let name = '';
			if (itemType === 'folder') {
				id = 'folder-' + makeid(5);
				name = itemName.value;
				const folderItem = new classes.Folder(id, name);
				currentFolderData.folders.push(folderItem);
			} else {
				id = 'file-' + makeid(5);
				name = itemName.value;
				let extension = '';
				// file does have extension
				if (name.lastIndexOf('.') !== -1) {
					extension = name.split('.').pop();
					name = name.substring(0, name.lastIndexOf('.'));
				}
				const fileItem = new classes.File(id, name, extension);
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

const header = {
	activateOperations: () => {
		activateNavigationMenuOperations();
	},
};

export default header;
