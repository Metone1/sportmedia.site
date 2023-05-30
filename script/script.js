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
const width = document.body.clientWidth;

document.querySelectorAll('.swiper').forEach(n => {
   const mySwiper = new Swiper(n.querySelector('.swiper-container'), {
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
   const mySwiper2 = new Swiper(n.querySelector('.swiper-container-velo'), {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 4,
      grabCursor: true,
      autoplay: {
         delay: 3500,
      },
      navigation: {
         nextEl: '.slider-velo__next',
         prevEl: '.slider-velo__prev'
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         450: {
            slidesPerView: 2,
         },
         600: {
            slidesPerView: 2,
         },
         900: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 4,
         },
      }
   });
   const mySwiper3 = new Swiper(n.querySelector('.swiper-container-scooter'), {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 4,
      grabCursor: true,
      autoplay: {
         delay: 3500,
      },
      navigation: {
         nextEl: '.slider-scooter__next',
         prevEl: '.slider-scooter__prev'
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         450: {
            slidesPerView: 2,
         },
         600: {
            slidesPerView: 2,
         },
         900: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 4,
         },
      }
   });
   const mySwiper4 = new Swiper(n.querySelector('.swiper-container-scooter2'), {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 4,
      grabCursor: true,
      autoplay: {
         delay: 3500,
      },
      navigation: {
         nextEl: '.slider-scooter2__next',
         prevEl: '.slider-scooter2__prev'
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         450: {
            slidesPerView: 2,
         },
         600: {
            slidesPerView: 2,
         },
         900: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 4,
         },
      }
   });
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


let veloArray = ['Велогибрид Eltreco Good 350W LITIUM', 'Велогибрид Eltreco Leto', 'Трехколесный электровелосипед Eltreco Porter Fat 500', 'Трехколесный электровелосипед Eltreco Porter Fat 500 UP', 'Трехколесный электровелосипед Eltreco Porter Fat 700', 'Электровелосипед Eltreco FS 900 new', 'Электровелосипед Eltreco MULTIWATT NEW 1000w', 'Электровелосипед Eltreco Ultra LITE', 'Электровелосипед Eltreco Ultra MAX', 'Электровелосипед Eltreco Ultra MAX PRO', 'Электровелосипед Eltreco Ultra Trend', 'Электровелосипед Eltreco Ultra Trend Up', 'Электровелосипед Eltreco Walter', 'Электровелосипед Eltreco White', 'Электровелосипед Eltreco XT 600', 'Электровелосипед Eltreco XT 600 D', 'Электровелосипед Eltreco XT 600 Limited edition', 'Электровелосипед Eltreco XT 750', 'Электровелосипед Eltreco XT 800 new', 'Электровелосипед Eltreco XT 850 new'];
