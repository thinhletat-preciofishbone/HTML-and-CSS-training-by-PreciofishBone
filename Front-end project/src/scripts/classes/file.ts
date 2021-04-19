import Item from './item';
// The 'Leaf' class
export default class File extends Item {
  extension: string;

  constructor(_id: string, _name: string, _extension: string) {
    super(_id, _name);
    this.extension = _extension;
  }
}
