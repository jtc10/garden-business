

// Script for responsive nav bar menu

const toggleClass = document.querySelector('.menu-toggle');
const classSwitch = document.querySelector('.header-list');
const list = document.getElementsByClassName('header-list');

toggleClass.addEventListener('click', () => {
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

// Smooth Scroll

function smoothScroll(target, duration) {
  let targetSection = document.querySelector(target);
  //console.log('targetSection: ' + targetSection);
  let targetPosition = targetSection.getBoundingClientRect().top;
  //console.log('targetPosition: ' + targetPosition);
  let startPosition = window.pageYOffset;
  //console.log('startPosition: ' + startPosition);
  // let distance = targetPosition - startPosition;
  // console.log('distance: ' + distance);
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
	   t /= d / 2 ;
	   if (t < 1) return c / 2 * t * t + b;
	   t--;
	   return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}



list[0].addEventListener('click', function (e) {
  let target = '';
  if (e.target && e.target.className == 'about-section') {
    target = '.about';
    smoothScroll(target, 1000);
    console.log(target);
  }else if (e.target && e.target.className == 'landing-section') {
    target = '.landing-page';
    smoothScroll(target, 1000);
    console.log(target);
  }else if (e.target && e.target.className == 'services-section') {
    target = '.services';
    smoothScroll(target, 1000);
    console.log(target);
  }else if (e.target && e.target.className == 'gallery-section') {
    target = '.gallery';
    smoothScroll(target, 1000);
    console.log(target);
  }else if (e.target && e.target.className == 'contact-section') {
    target = '.contact';
    smoothScroll(target, 1000);
    console.log(target);
  }

});
