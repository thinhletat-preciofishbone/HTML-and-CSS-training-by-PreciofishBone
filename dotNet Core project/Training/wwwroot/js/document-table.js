const documentTableConstants = {
	itemType: {
		folder: 'folder',
		file: 'file',
	},
	rootFolderDirectory: 'root',
	rootFolderId: 'folder-root',
	itemIconCSSClasses: {
		folder: 'bi bi-folder',
		text: 'bi bi-journal-text',
		word: 'bi bi-file-earmark-word-fill word-icon',
		excel: 'bi bi-file-earmark-spreadsheet-fill excel-icon',
		powerPoint: 'bi bi-file-earmark-ppt-fill power-point-icon',
		oneNote: 'bi bi-journal-bookmark-fill one-note-icon',
		program: 'bi bi-terminal-fill program-icon',
		file: 'bi bi-file',
	},
	fetchMethod: {
		GET: 'GET',
		POST: 'POST'
	},
	APIEndpoints: {
		GetFilesAndFoldersFromParentFolder: '/api/Items/GetFilesAndFoldersFromParentFolder/',
		PostNewFolder: '/api/Folders',
		PostNewFile: '/api/Files'
	},
	APIStatus: {
		success: 'success'
	}
};

const pageServices = {
	getURLParams: (_parameter) => {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get(_parameter);
	},
	getFolderDataFromBrowserStorage: (_key) => {
		return JSON.parse(window.localStorage.getItem(_key));
	},
	// using
	getBrowserStorageData: (_key) => {
		return window.localStorage.getItem(_key);
	},
	// using
	setBrowserStorageData: (_key, _value) => {
		window.localStorage.setItem(_key, _value);
	},
};

const documentTableServices = {
	// using
	getBrowserStorageData: (_key) => {
		return pageServices.getBrowserStorageData(_key);
	},
	// using
	setBrowserStorageData: (_key, _value) => {
		pageServices.setBrowserStorageData(_key, _value);
	},
	// using
	fetchDataFromAPI: async (_APIendpoint, _method, _data = {}) => {
		if (_method === documentTableConstants.fetchMethod.GET) {
			return await fetch(_APIendpoint).then((_response) => {
				if (!_response.ok) {
					console.log('Response status is NOT ok!');
					return null;
				}
				console.log('Response status: ', _response.status);
				return _response.json();
			});
		} else if (_method === documentTableConstants.fetchMethod.POST) {
			console.log('POST?', _method);
			return await fetch(_APIendpoint, {
				method: _method, // *GET, POST, PUT, DELETE, etc.
				mode: 'cors', // no-cors, *cors, same-origin
				cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
				credentials: 'same-origin', // include, *same-origin, omit
				headers: {
					'Content-Type': 'application/json'
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				redirect: 'follow', // manual, *follow, error
				referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
				body: JSON.stringify(_data) // body data type must match "Content-Type" header
			}).then((_response) => {
				if (!_response.ok) {
					console.log('Response status is NOT ok!');
					return null;
				}
				console.log('Response status: ', _response.status);
				return _response.json();
			});
		}
	},
	// using
	getQueryStringDirectory: () => {
		const folderDirectory = pageServices.getURLParams('directory');
		if (folderDirectory === null) {
			return null;
		}
		return folderDirectory;
	},
	// using
	setQueryStringFolderDirectory: (_newDirectory) => {
		let locationProtocol = window.location.protocol;
		let locationHost = window.location.host;
		let locationPathname = window.location.pathname;
		/* reference code
		var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?arg=1';
		window.history.pushState({ path: refresh }, '', refresh);
		*/
		var newurl = `${locationProtocol}//${locationHost}${locationPathname}?directory=${encodeURIComponent(_newDirectory)}`;
		window.history.pushState({ path: newurl }, '', newurl);
	},
	// using
	isRootFolderDirectory: () => {
		let folderDirectory = documentTableServices.getQueryStringDirectory();
		if (folderDirectory === null || folderDirectory === documentTableConstants.rootFolderDirectory) {
			console.log('You are currently in the root folder');
			return true;
		}
		console.log(`You are currently in the ${folderDirectory} folder`);
		return false;
	},
	// using
	getItemIconCSSClass: (_extension) => {
		if (_extension !== null) {
			switch (_extension) {
				case 'txt':
					return documentTableConstants.itemIconCSSClasses.text;
				case 'doc':
				case 'docx':
					return documentTableConstants.itemIconCSSClasses.word;
				case 'xml':
				case 'csv':
				case 'xlsx':
					return documentTableConstants.itemIconCSSClasses.excel;
				case 'exe':
					return documentTableConstants.itemIconCSSClasses.program;
				default:
					return documentTableConstants.itemIconCSSClasses.file;
			}
		} else {
			return documentTableConstants.itemIconCSSClasses.folder;
		}
	},
	makeTempId: (_length) => {
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

const documentTable = {
	setNewItemModalInfo: (_itemInfo) => {
		document.getElementById('new-item-modal-title').innerHTML =
			_itemInfo.title;

		document.getElementById('new-item-name-label').innerHTML =
			_itemInfo.name;

		document.getElementById("new-item-name").value = '';

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
	setNewItemData: (_itemInputData) => {
		let id = '';
		let name = _itemInputData.name.value;
		let extension = null;

		if (_itemInputData.type === documentTableConstants.itemType.folder) {
			id = 'folder-test' + documentTableServices.makeTempId(8);
		} else {
			id = 'file-test' + documentTableServices.makeTempId(8);

			extension = '';
			// file does have extension
			if (name.lastIndexOf('.') !== -1) {
				extension = name.split('.').pop();
				name = name.substring(0, name.lastIndexOf('.'));
			}
		}

		return { id, name, extension };
	},
	getItemInputData: () => {
		// -- item name
		const name = document
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
			.addEventListener('click', async () => {
				let itemInputData = documentTable.getItemInputData();
				let newItemData = documentTable.setNewItemData(itemInputData);

				// Get the current directory
				let directory = documentTableServices.getQueryStringDirectory();

				// get the directory' Id
				let directoryId = documentTableServices.getBrowserStorageData(directory);

				if (itemInputData.type === documentTableConstants.itemType.folder) {
					let folder = {
						"id": newItemData.id,
						"name": newItemData.name,
						"createdTime": new Date(),
						"createdBy": 'Thinh Le',
						"modifiedTime": new Date(),
						"modifiedBy": '',
						"parentFolderId": directoryId,
					};

					let APIEndpoint = documentTableConstants.APIEndpoints.PostNewFolder;
					let fetchMethod = documentTableConstants.fetchMethod.POST;
					await documentTableServices.fetchDataFromAPI(APIEndpoint, fetchMethod, folder);
				} else {
					let file = {
						"id": newItemData.id,
						"name": newItemData.name,
						"createdTime": new Date(),
						"createdBy": 'Thinh Le',
						"modifiedTime": new Date(),
						"modifiedBy": '',
						"parentFolderId": directoryId,
						"extension": newItemData.extension
					};

					let APIEndpoint = documentTableConstants.APIEndpoints.PostNewFile;
					let fetchMethod = documentTableConstants.fetchMethod.POST;
					await documentTableServices.fetchDataFromAPI(APIEndpoint, fetchMethod, file);
				}

				// Get table data
				let tableData = await documentTable.GetTableData(directoryId);

				// Render table data with data recieved from API
				documentTable.renderTableData(tableData);

			});
	},
	loadMenuBarEvents: () => {
		documentTable.createANewItemEvent();
		documentTable.saveANewItemEvent();
	},
	setBrowserStorageData: (_folderDirectory, _folderId) => {
		// Key<Path>: Value<parent folder id>
		documentTableServices.setBrowserStorageData(_folderDirectory, _folderId);
	},
	createItemIcon: (_extension) => {
		const icon = document.createElement('i');
		const iconCSSClass = documentTableServices.getItemIconCSSClass(_extension);
		icon.setAttribute('class', iconCSSClass);

		return icon;
	},
	renderItemTypeData: (_item) => {
		// item type
		let td = document.createElement('td');
		td.setAttribute('class', 'item-type');
		td.setAttribute('data-label', 'File Type');
		const icon = documentTable.createItemIcon(_item.fileExtension);
		td.appendChild(icon);

		return td;
	},
	appendQueryStringDirectory: (_newFolderName) => {
		// get the current directory parameter in query string
		let currentDirectory = documentTableServices.getQueryStringDirectory();
		let newDirectory = '';
		if (currentDirectory === null) {
			// directory=root
			newDirectory = 'root'

		} else {
			newDirectory = `${currentDirectory}/${_newFolderName}`;
		}
		documentTableServices.setQueryStringFolderDirectory(newDirectory);
	},
	renderItemNameData: (_item) => {
		// item type
		let td = document.createElement('td');
		td.setAttribute('class', 'item-name');
		td.setAttribute('data-label', 'Name');

		// a file
		if (_item.fileExtension !== null) {
			if (_item.fileExtension !== '') {
				td.innerHTML = `${_item.itemData.name}.${_item.fileExtension}`;
			} else {
				td.innerHTML = `${_item.itemData.name}`;
			}
		} else {
			// a folder
			td.className += ' folder-item';
			td.innerHTML = `${_item.itemData.name}`;
			td.setAttribute('data-id', _item.itemData.id);
			td.setAttribute('data-name', _item.itemData.name);
			td.addEventListener('click', async (event) => {
				// Get clicked folder Id
				let clickedFolderId = event.target.getAttribute('data-id');

				// Update the directory parameter in query string
				let clickedFolderName = event.target.getAttribute('data-name');
				documentTable.appendQueryStringDirectory(clickedFolderName);

				// Write to Browser storage 
				let clickedDirectory = documentTableServices.getQueryStringDirectory();
				documentTable.setBrowserStorageData(clickedDirectory, clickedFolderId);

				// Get clicked folder data
				let tableData = await documentTable.GetTableData(clickedFolderId);

				// Render clicked folder
				documentTable.renderTableData(tableData);
			});
		}

		return td;
	},
	renderItemModifiedTimeData: (_item) => {
		// item type
		let td = document.createElement('td');
		td.setAttribute('class', 'modified-time');
		td.setAttribute('data-label', 'Modified');
		td.innerHTML = `${_item.itemData.modifiedTime}`;

		return td;
	},
	renderItemModifiedByData: (_item) => {
		// item type
		let td = document.createElement('td');
		td.setAttribute('class', 'modified-by');
		td.setAttribute('data-label', 'Modified By');
		td.innerHTML = `${_item.itemData.modifiedBy}`;

		return td;
	},
	displayItems: (_item) => {
		console.log(`${_item.itemData.name} (${_item.itemData.id})`);
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
	renderTableData: (_tableData) => {
		if (_tableData !== null) {
			console.log('Data recieved from API: ', _tableData);
			// For each element in the table's data, display them on UI
			console.log(`------------------------------------------------`);
			_tableData.forEach(documentTable.displayItems)
			console.log(`------------------------------------------------`);
		}
		else {
			if (_tableData === []) {

			} else {
				console.log('TODO: display an error page?')
				// TODO: display an error page?
			}
		}
	},
	GetTableData: async (_parentFolderId = documentTableConstants.rootFolderId) => {
		// Clear the current table data (if any):
		const tbody = document.getElementsByClassName('document-table')[0]
			.getElementsByTagName('tbody')[0].innerHTML = '';

		// Call API to get current folder' files and folders
		let APIEndpoint = documentTableConstants.APIEndpoints.GetFilesAndFoldersFromParentFolder + _parentFolderId;
		let fetchMethod = documentTableConstants.fetchMethod.GET;
		let _tableData = await documentTableServices.fetchDataFromAPI(APIEndpoint, fetchMethod);
		if (_tableData !== null) {
			return _tableData;
		}
		else {
			return null;
		}
	},
	loadTableEvents: async () => {
		// Write data to browser storage (only with the root folder?)
		if (documentTableServices.isRootFolderDirectory()) {
			if (documentTableServices.getQueryStringDirectory() === null) {
				documentTable.appendQueryStringDirectory(documentTableConstants.rootFolderDirectory);
			}
			documentTable.setBrowserStorageData(documentTableConstants.rootFolderDirectory, documentTableConstants.rootFolderId);
		}

		// Get the current directory
		let directory = documentTableServices.getQueryStringDirectory();

		// get the directory' Id
		let directoryId = documentTableServices.getBrowserStorageData(directory);

		// Get table data
		let tableData = await documentTable.GetTableData(directoryId);

		// Render table data with data recieved from API
		documentTable.renderTableData(tableData);
	},
	loadEvents: () => {
		documentTable.loadMenuBarEvents();
		documentTable.loadTableEvents();
	},
}

$(document).ready(() => {
	documentTable.loadEvents();
});