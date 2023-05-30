let arrayBike = ['Велогибрид Eltreco Good 350W LITIUM', 'Велогибрид Eltreco Leto', 'Трехколесный  Eltreco Porter Fat 500', 'Трехколесный  Eltreco Porter Fat 500 UP', 'Трехколесный  Eltreco Porter Fat 700', ' Eltreco FS 900 new', ' Eltreco MULTIWATT NEW 1000w', ' Eltreco Ultra LITE', ' Eltreco Ultra MAX', ' Eltreco Ultra MAX PRO', ' Eltreco Ultra Trend', ' Eltreco Ultra Trend Up', ' Eltreco Walter', ' Eltreco White', ' Eltreco XT 600', ' Eltreco XT 600 D', ' Eltreco XT 600 Limited edition', ' Eltreco XT 750', ' Eltreco XT 800 new', ' Eltreco XT 850 new', 'Велогибрид GREEN CITY e-ALFA GL', ' Green City E Alfa Fat', ' GREEN CITY e-ALFA LUX', ' GREEN CITY e-ALFA new', 'Электротрицикл GREEN CITY e-ALFA Trike', ' Minako F10', ' Minako F11', ' Minako FOX-L 15 Ah', ' Minako FOX-L 23 Ah', ' Minako FOX-S 15 Ah', ' Minako FOX-S 23 Ah', ' Minako H3', ' Minako M1', ' Minako Monster', ' Minako Trike', ' Minako V12', ' Minako V12 LUX (без багажника)', ' Minako V8 Pro', 'Велогибрид VOLTECO BIGCAT DUAL NEW', 'Велогибрид VOLTECO CYBER', 'Велогибрид VOLTECO FLEX UP', ' VOLTECO BAD DUAL NEW', ' VOLTECO FLEX', ' FORWARD APACHE 27,5 Е-350', ' FORWARD APACHE 29 E-500', ' FORWARD CYCLONE 26 E-250', ' FORWARD CYCLONE PLUS 26 2.0 disc 500w', ' FORWARD CYCLONE PLUS 26 E-500', ' FORWARD DUNDEE 20 E-250', ' FORWARD OMEGA 28 250w', ' FORWARD OMEGA 28 E-250', ' FORWARD RIVIERA 24 E-250', ' FORWARD TSUNAMI 29 2.0 disc 500 W', ' FORWARD TSUNAMI 29 E-500', ' FORWARD VOLCANO 27,5 2.0 disc 250w', ' FORWARD VOLCANO EXPRESS 27,5 E-350', ' FORWARD VOLCANO EXPRESS 27,5 E-350'];

let arrayBikeLinks = ['http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=194', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=195', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=83', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=84', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=85', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=71', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=190', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=185', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=189', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=188', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=186', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=187', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=184', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=82', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=191', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=69', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=192', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=193', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=50', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_71&product_id=70', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_69&product_id=78', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_69&product_id=77', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_69&product_id=79', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_69&product_id=76', 'http://catalog.sportmedia.by/index.php?route=product/product&path=59_69&product_id=210'];


//bike 
for (let i = 0; i < arrayBikeLinks.length; i++) {
   let bikeLink = document.querySelectorAll('.bike__link');
   bikeLink[i].setAttribute('href', `${arrayBikeLinks[i]}`);
   bikeLink[i].setAttribute('target', '_blank');

   let bikeImg = document.createElement('img');
   bikeImg.src = `./images/product/product${i + 1}.jpg`;

   let bikeDiscription = document.createElement('p');
   bikeDiscription.textContent = `${arrayBike[i]}`;
   bikeDiscription.className = 'bike__discription';

   bikeLink[i].appendChild(bikeImg);
   bikeLink[i].appendChild(bikeDiscription);
}










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
   const mySwiperBike = new Swiper(n.querySelector('.swiper-container-bike'), {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 10,
      autoplay: {
         delay: 3500,
      },
      navigation: {
         nextEl: '.slider-bike__next',
         prevEl: '.slider-bike__prev'
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
   const mySwiperScooter = new Swiper(n.querySelector('.swiper-container-scooter'), {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 10,
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
   const mySwiperScooter2 = new Swiper(n.querySelector('.swiper-container-scooter2'), {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 10,
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
   const mySwiperCycle = new Swiper(n.querySelector('.swiper-container-cycle'), {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 10,
      autoplay: {
         delay: 3500,
      },
      navigation: {
         nextEl: '.slider-cycle__next',
         prevEl: '.slider-cycle__prev'
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
   const mySwiperOther = new Swiper(n.querySelector('.swiper-container-other'), {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 10,
      autoplay: {
         delay: 3500,
      },
      navigation: {
         nextEl: '.slider-other__next',
         prevEl: '.slider-other__prev'
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