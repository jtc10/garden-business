

var toggleClass = document.querySelector('.menu-toggle');
var classSwitch = document.querySelector('.header-list');

toggleClass.addEventListener('click', function () {
  classSwitch.classList.toggle('header-list-open');
});
