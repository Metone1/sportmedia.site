const burgerMenu = document.querySelector('.burger-menu__list');
const checkbox = document.querySelector('.burger__checkbox');
checkbox.addEventListener('click', function () {
   if (checkbox.checked == true) {
      burgerMenu.classList.add('active');
      document.body.classList.add('lock');
   }
   else {
      burgerMenu.classList.remove('active');
      document.body.classList.remove('lock');
   }
});

let bullets = document.querySelectorAll('.swiper-pagination-img');
const mySwiper = new Swiper(
   '.swiper-container', {
   direction: 'horizontal',
   initialSlide: 0,
   loop: true,
   grabCursor: true,
   autoplay: {
      delay: 3500,
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'custom',
      bulletClass: 'swiper-pagination-img',
      renderCustom: function (_mySwiper, current, total) {
         for (let i = 1; i <= total; i++) {
            if (i == current) {
               bullets[i - 1].classList.add('active')
            }
            else {
               bullets[i - 1].classList.remove('active')
            }
         }
      }
   }
});

//=============прокрутка при клике===========

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick)
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').clientHeight;

         if (burgerMenu.classList.contains('active')) {
            document.body.classList.remove('lock');
            burgerMenu.classList.remove('active');
            checkbox.checked = false;
         }

         window.scrollTo
            ({
               top: gotoBlockValue,
               behavior: "smooth"
            });
         e.preventDefault();
      }
   }
};


