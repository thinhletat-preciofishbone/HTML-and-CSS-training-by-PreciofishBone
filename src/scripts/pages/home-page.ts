import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import header from '../components/_header';

ready(() => {
  renderGrid();
  header.activateOperations();
});
