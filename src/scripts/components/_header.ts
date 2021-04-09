function activateNavigationMenuOperations() {
  $('.create-new-folder-option').on('click', () => {
    alert('hehehe');
  });
  $('.create-new-file-option').on('click', () => {
    alert('hehehe');
  });
}

const header = {
  activateOperations: () => {
    activateNavigationMenuOperations();
  },
};

export default header;
