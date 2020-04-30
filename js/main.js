const elHeader = document.querySelector('header');
const elMenuBtn = document.querySelector('.btn-menu');
const elMenuBox = document.querySelector('.navbar-wrapper');
const elLinks = document.querySelectorAll('.menu__item a');

elLinks.forEach( link => {
  
  link.addEventListener('click', function() {
    elMenuBtn.classList.toggle('active');
    elMenuBox.classList.toggle('navbar--active');
    elLinks.forEach( link => {
      link.parentElement.classList.remove('link--active');
    });  
    this.parentElement.classList.add('link--active');
  });
});

elMenuBtn.addEventListener('click', () => {
  elMenuBtn.classList.toggle('active');
  elMenuBox.classList.toggle('navbar--active');
})

window.addEventListener('scroll', () => {
  elHeader.classList.toggle('sticky', window.scrollY > 0);
});