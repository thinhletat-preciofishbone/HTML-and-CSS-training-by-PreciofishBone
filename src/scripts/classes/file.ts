import Item from './item';
// The 'Leaf' class
export default class File extends Item {
  fileExtension: string;

  constructor(
    _fileType: string,
    _fileName: string,
    _fileExtension: string,
  ) {
    super(_fileType, _fileName);
    this.fileExtension = _fileExtension;
  }

  test() {
    console.log(this.itemType);
    console.log(this.itemName);
    console.log(this.fileExtension);
    console.log(this.modifiedTime);
    console.log(this.modifiedBy);
  }
}
