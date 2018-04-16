

// Script for responsive nav bar menu

var toggleClass = document.querySelector('.menu-toggle');
var classSwitch = document.querySelector('.header-list');

toggleClass.addEventListener('click', function () {
  classSwitch.classList.toggle('header-list-open');
});

// Script for gallery page picture toggle

const getEl = (selector) => document.querySelector(selector);
const getAllEls = (selector) => [...document.querySelectorAll(selector)];
const hideEl = (el) => el.classList.add('hide');
const showEl = (el) => el.classList.remove('hide');
const hideEls = (selector) => getAllEls(selector).forEach(hideEl);
const showEls = (selector) => getAllEls(selector).forEach(showEl);

const select = getEl('#all-button');
const indoor = getEl('#indoor-button');
const outdoor = getEl('#outdoor-button');
const indoorEls = getAllEls('.indoor');
const outdoorEls = getAllEls('.outdoor');

select.addEventListener('click', () => {
  showEls('.indoor');
  showEls('.outdoor');
});

indoor.addEventListener('click', () => {
  showEls('.indoor');
  hideEls('.outdoor');
});

outdoor.addEventListener('click', () => {
  showEls('.outdoor');
  hideEls('.indoor');
});
