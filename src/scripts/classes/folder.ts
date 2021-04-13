import Item from './item';
// The 'Leaf' class
export default class Folder extends Item {
  fileItems: any = [];

  subFolderItems: any = [];

  addFile(_file: Item) {
    this.fileItems.push(_file);
  }

  addFolder(_folder: Folder) {
    this.subFolderItems.push(_folder);
  }
}
