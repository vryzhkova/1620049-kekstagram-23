const filters = document.querySelector('.img-filters');
const filterDiscussedButton = document.querySelector('#filter-discussed');
const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterButtons = document.querySelectorAll('.img-filters__button');

function deactivateButtons () {
  Array.from(filterButtons).forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
}

function activateButton (button) {
  button.classList.add('img-filters__button--active');
}

function onFilterButtonClick(filterButton, cb) {
  filterButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    deactivateButtons();
    activateButton(evt.target);
    cb();
  });
}

export function setFilterDiscussedClick (cb) {
  onFilterButtonClick(filterDiscussedButton, cb);
}

export function setFilterDefaultClick (cb) {
  onFilterButtonClick(filterDefaultButton, cb);
}

export function setFilterRandomClick (cb) {
  onFilterButtonClick(filterRandomButton, cb);
}

export function showFilter () {
  filters.classList.remove('img-filters--inactive');
}
