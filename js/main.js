const swiper = new Swiper('.main-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.main-slider__arrow',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    }
  }
});

let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
})

const modalWindow =  document.querySelector('.modal');
const buttonModal =  document.querySelector('.main__button-play');

buttonModal.addEventListener('click', (e) =>{
  modalWindow.classList.add('active');
})

modalWindow.addEventListener('click', (e) =>{
  const isModel = e.target.closest('.modal__innen');

  if(!isModel){
    modalWindow.classList.remove('active');
  }

});