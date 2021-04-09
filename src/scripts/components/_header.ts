import classes from '../classes/_index';
import enums from '../enums/index';

function activateNavigationMenuOperations() {
  $('.create-new-folder-option').on('click', () => {
    const file = new classes.File(
      enums.Item.fileType.File,
      'd4ng3r0Us v1rUs',
      'exe',
    );
    file.test();
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
