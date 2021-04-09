import classes from '../classes/_index';

function activateNavigationMenuOperations() {
  $('.create-new-folder-option').on('click', () => {
    /*
    const file = new classes.File(
      enums.Item.fileType.File,
      'd4ng3r0Us v1rUs',
      'exe',
    );
    */

    const rootFolder = new classes.Folder('fd-0', 'root');
    const file1 = new classes.File('f-0', 'Morris Worm', 'exe');
    const file2 = new classes.File('f-1', 'Nimda', 'exe');
    const folder1 = new classes.Folder('fd-1', 'CAS');

    rootFolder.addFile(file1);
    rootFolder.addFile(file2);
    rootFolder.addFolder(folder1);

    console.log(rootFolder.fileItems);
    console.log(rootFolder.folderItems);
  });
  $('.create-new-file-option').on('click', () => {
    // console.log('create a new file option clicked');
  });
}

const header = {
  activateOperations: () => {
    activateNavigationMenuOperations();
  },
};

export default header;
