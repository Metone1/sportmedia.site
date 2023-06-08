"use strict";

var electrobikeArray = ['Велогибрид Eltreco Good 350W LITIUM', 'Велогибрид Eltreco Leto', 'Трехколесный  Eltreco Porter Fat 500', 'Трехколесный  Eltreco Porter Fat 500 UP', 'Трехколесный  Eltreco Porter Fat 700', 'Eltreco FS 900 new', 'Eltreco MULTIWATT NEW 1000w', 'Eltreco Ultra LITE', 'Eltreco Ultra MAX', 'Eltreco Ultra MAX PRO', 'Eltreco Ultra Trend', 'Eltreco Ultra Trend Up', 'Eltreco Walter', 'Eltreco White', 'Eltreco XT 600', 'Eltreco XT 600 D', 'Eltreco XT 600 Limited edition', 'Eltreco XT 750', 'Eltreco XT 800 new', 'Eltreco XT 850 new', 'Велогибрид GREEN CITY e-ALFA GL', 'Green City E Alfa Fat', 'GREEN CITY e-ALFA LUX', 'GREEN CITY e-ALFA new', 'GREEN CITY e-ALFA Trike', 'Minako F10', 'Minako F11', 'Minako FOX-L 15 Ah', 'Minako FOX-L 23 Ah', 'Minako FOX-S 15 Ah', 'Minako FOX-S 23 Ah', 'Minako H3', 'Minako M1', 'Minako Monster', 'Minako Trike', 'Minako V12', 'Minako V12 LUX (без багажника)', 'Minako V8 Pro', 'Велогибрид VOLTECO BIGCAT DUAL NEW', 'Велогибрид VOLTECO CYBER', 'Велогибрид VOLTECO FLEX UP', 'VOLTECO BAD DUAL NEW', 'VOLTECO FLEX', 'FORWARD APACHE 27,5 Е-350', 'FORWARD APACHE 29 E-500', 'FORWARD CYCLONE 26 E-250', 'FORWARD CYCLONE PLUS 26 2.0 disc 500w', 'FORWARD CYCLONE PLUS 26 E-500', 'FORWARD DUNDEE 20 E-250', 'FORWARD OMEGA 28 250w', 'FORWARD OMEGA 28 E-250', 'FORWARD RIVIERA 24 E-250', 'FORWARD TSUNAMI 29 2.0 disc 500 W', 'FORWARD TSUNAMI 29 E-500', 'FORWARD VOLCANO 27,5 2.0 disc 250w', 'FORWARD VOLCANO EXPRESS 27,5 E-350', 'FORWARD VOLCANO EXPRESS 27,5 E-350', 'Kugoo V1'];
var electrobikeArrayLinks = ['59_71&product_id=194', '59_71&product_id=195', '59_71&product_id=83', '59_71&product_id=84', '59_71&product_id=85', '59_71&product_id=71', '59_71&product_id=190', '59_71&product_id=185', '59_71&product_id=189', '59_71&product_id=188', '59_71&product_id=186', '59_71&product_id=187', '59_71&product_id=184', '59_71&product_id=82', '59_71&product_id=191', '59_71&product_id=69', '59_71&product_id=192', '59_71&product_id=193', '59_71&product_id=50', '59_71&product_id=70', '59_69&product_id=78', '59_69&product_id=77', '59_69&product_id=79', '59_69&product_id=76', '59_69&product_id=210', '59_72&product_id=117', '59_72&product_id=113', '59_72&product_id=120', '59_72&product_id=119', '59_72&product_id=110', '59_72&product_id=121', '59_72&product_id=111', '59_72&product_id=122', '59_72&product_id=109', '59_72&product_id=118', '59_72&product_id=115', '59_72&product_id=114', '59_72&product_id=116', '59_70&product_id=75', '59_70&product_id=72', '59_70&product_id=81', '59_70&product_id=73', '59_70&product_id=80', '59_81&product_id=203', '59_81&product_id=208', '59_81&product_id=199', '59_81&product_id=204', '59_81&product_id=205', '59_81&product_id=196', '59_81&product_id=209', '59_81&product_id=198', '59_81&product_id=197', '59_81&product_id=206', '59_81&product_id=207', '59_81&product_id=201', '59_81&product_id=200', '59_81&product_id=202', '60_73&product_id=179'];
var bikeArray = ['Gestalt HX-9027/27.5-17', 'Gestalt G500', 'Altair City 20', 'Altair City 28 low 3.0', 'Stream trevel 26', 'Stream trevel 24', 'Stream Codifice Prime 27.5', 'Greenway Colibri-H 26'];
var bikeArrayLinks = ['67_85&product_id=236', '67_85&product_id=237', '67_87&product_id=238', '67_87&product_id=239', '67_88&product_id=240', '67_88&product_id=241', '67_88&product_id=242', '67_90&product_id=244'];
var scooterArray = ['Kugoo C1 Pro', 'Kugoo ES3', 'KUGOO G-Booster', 'Kugoo G-Max', 'Kugoo G1', 'Kugoo HX', 'Kugoo HX Plus', 'Kugoo HX Pro', 'Kugoo Kirin First', 'Kugoo Kirin G2 Max', 'Kugoo Kirin G3', 'Kugoo Kirin M3', 'Kugoo Kirin M4 Pro Plus', 'Kugoo Kirin M5 Pro', 'Kugoo M2 Pro', 'Kugoo M2 Pro (Jilong)', 'Kugoo S1 (Jilong)', 'Kugoo S1 Plus (Jilong)', 'Kugoo S3 (Jilong)', 'Kugoo X1', 'Kugoo X8/G1 mini', 'KugooKirin C1 Plus', 'KugooKirin M2', 'KugooKirin M4', 'KugooKirin M4 Pro 13 Ач', 'KugooKirin M4 Pro 18 Ач', 'KugooKirin M5', 'KugooKirin Max Speed', ' Kugoo G2 PRO', 'Midway Air', 'Midway Air Pro', 'Midway Amix', 'Midway Amix PRO', 'Midway Mini', 'Midway Yamato 0809', 'Midway Yamato 0809 PRO', 'Midway Yamato 0810', 'Midway Yamato Andy 2022', 'Midway Yamato I-One', 'Midway Yamato I-One PRO', 'Midway Yamato iMax', 'Midway Yamato iMax PRO'];
var scooterArrayLinks = ['60_73&product_id=168', '60_73&product_id=169', '60_73&product_id=170', '60_73&product_id=171', '60_73&product_id=99', '60_73&product_id=174', '60_73&product_id=172', '60_73&product_id=173', '60_73&product_id=86', '60_73&product_id=175', '60_73&product_id=182', '60_73&product_id=183', '60_73&product_id=176', '60_73&product_id=177', '60_73&product_id=178', '60_73&product_id=91', '60_73&product_id=87', '60_73&product_id=89', '60_73&product_id=88', '60_73&product_id=180', '60_73&product_id=96', '60_73&product_id=94', '60_73&product_id=90', '60_73&product_id=92', '60_73&product_id=95', '60_73&product_id=112', '60_73&product_id=98', '60_73&product_id=93', '60_73&product_id=97', '60_74&product_id=131', '60_74&product_id=132', '60_74&product_id=133', '60_74&product_id=134', '60_74&product_id=124', '60_74&product_id=123', '60_74&product_id=128', '60_74&product_id=126', '60_74&product_id=125', '60_74&product_id=127', '60_74&product_id=129', '60_74&product_id=130', '60_74&product_id=135'];
var scooterArray2 = ['KugooKirin C3 PRO', 'KugooKirin NOTE', 'KugooKirin V-PRO', 'Citycoco GT X1 PRO', 'CityCoco GT X2', 'CityCoco GT X2 PRO', 'Citycoco GT X3 PRO', 'Kugoo C7', 'Wolong C1 Pro', 'White Siberia Citycoco WS-PRO 2WD 4000W', 'White Siberia Wild Wheel 3000w', 'White Siberia WS Mini R 1200W', 'White Siberia WS-Pro 2500w', 'White Siberia WS-Pro Max 3950W', 'Volteco Trike L New', 'Volteco Trike New'];
var scooterArrayLinks2 = ['61_77&product_id=107', '61_77&product_id=105', '61_77&product_id=106', '61_76&product_id=102', '61_76&product_id=101', '61_76&product_id=103', '61_76&product_id=104', '61_76&product_id=108', '61_76&product_id=100', '61_75&product_id=137', '61_75&product_id=147', '61_75&product_id=142', '61_75&product_id=141', '61_75&product_id=146', '61_86&product_id=234', '61_86&product_id=233'];
var cycleArray = ['White Siberia IKRA 5000W', 'White Siberia PRO TRIKE 3000w', 'White Siberia PRO TRIKE+ 3000W 42 Ah', 'White Siberia SIBTRIKE 2000W', 'White Siberia SIBTRIKE L 2000W', 'White Siberia SIBTRIKE MAX 2000W', 'White Siberia SIBTRIKE R 2000W', 'White Siberia TRIKE MINI', 'White Siberia TRIKE PRO 3000W', 'RuTrike D4 1800 60V 1200W', 'Rutrike Атлант 2000 72V 2200W', 'Rutrike Бумеранг', 'Rutrike Вагон', 'Rutrike Вояж К1 1200 60V800W', 'Rutrike Вояж К22 1200 60V/800W', 'Rutrike Вояж-П 1200 60V 800W', 'Rutrike Дукат 1500 60V 1000W', 'Rutrike Караван', 'Rutrike Круиз 60V/1000W', 'Rutrike Куб', 'Rutrike КЭБ', 'Rutrike Навигатор', 'Rutrike Патрон', 'Rutrike Пилот', 'Rutrike Рикша 48V1000W', 'Rutrike Топик', 'Rutrike Трансформер', 'Rutrike Шкипер', 'Rutrike Шкипер New', 'Rutrike Экипаж 60V650W', 'Rutrike Экипаж Люкс'];
var cycleArrayLinks = ['82_83&product_id=138', '82_83&product_id=136', '82_83&product_id=140', '82_83&product_id=145', '82_83&product_id=143', '82_83&product_id=148', '82_83&product_id=149', '82_83&product_id=150', '82_83&product_id=144', '82_84&product_id=232', '82_84&product_id=229', '82_84&product_id=215', '82_84&product_id=213', '82_84&product_id=228', '82_84&product_id=226', '82_84&product_id=230', '82_84&product_id=231', '82_84&product_id=218', '82_84&product_id=227', '82_84&product_id=223', '82_84&product_id=219', '82_84&product_id=212', '82_84&product_id=217', '82_84&product_id=216', '82_84&product_id=225', '82_84&product_id=221', '82_84&product_id=222', '82_84&product_id=214', '82_84&product_id=211', '82_84&product_id=220', '82_84&product_id=224'];
var otherArray = ['Детский электроквадроцикл White Siberia WS SNEG 1500W', 'Беговел Elektra', 'Беговел-трансформер Flint', 'Гироскутер Smart Balance GT AQUA 10,5', 'Гироскутер Smart Balance Premium 10,5'];
var otherArrayLinks = ['61_75&product_id=139', '80&product_id=166', '=80&product_id=167', '78_79&product_id=151', '78_79&product_id=154'];

//swiper-slide-creator
function createProductElements(productArray, productArrayLinks, productType) {
  var product = document.querySelector("#swiper-".concat(productType));
  for (var i = 0; i < productArray.length; i++) {
    var productItem = document.createElement('a');
    productItem.className = 'swiper-slide swiper-slide__product';
    productItem.setAttribute('href', "http://catalog.sportmedia.by/index.php?route=product/product&path=".concat(productArrayLinks[i]));
    productItem.setAttribute('target', '_blank');
    var productImgBlock = document.createElement('div');
    productImgBlock.className = "".concat(productType, "__imageBlock product__imageBlock");
    var productImg = document.createElement('img');
    productImg.src = "./images/product/".concat(productType, "/product").concat(i + 1, "_").concat(i + 1, "_11zon.webp");
    productImg.alt = "".concat(productType).concat(i + 1);
    var productDescription = document.createElement('p');
    productDescription.textContent = productArray[i];
    productDescription.className = 'description';
    product.appendChild(productItem);
    productImgBlock.appendChild(productImg);
    productItem.appendChild(productImgBlock);
    productItem.appendChild(productDescription);
  }
}
createProductElements(electrobikeArray, electrobikeArrayLinks, 'electrobike');
createProductElements(scooterArray, scooterArrayLinks, 'scooter');
createProductElements(scooterArray2, scooterArrayLinks2, 'scooter2');
createProductElements(cycleArray, cycleArrayLinks, 'cycle');
createProductElements(otherArray, otherArrayLinks, 'other');
createProductElements(bikeArray, bikeArrayLinks, 'bike');

//burger
var burgerMenu = document.querySelector('.burger-menu__list');
var checkbox = document.querySelector('.burger__checkbox');
checkbox.addEventListener('click', function () {
  if (checkbox.checked == true) {
    burgerMenu.classList.add('active');
    document.body.classList.add('lock');
  } else {
    burgerMenu.classList.remove('active');
    document.body.classList.remove('lock');
  }
});

//swiper-inicialization
var productSwipers = document.querySelectorAll('.product__swiper');
for (var i = 0; i < productSwipers.length; i++) {
  var myProductSwipers = new Swiper(".".concat(productSwipers[i].children[0].classList[0]), {
    direction: 'horizontal',
    initialSlide: 0,
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 10,
    autoplay: {
      delay: 3500
    },
    navigation: {
      nextEl: ".".concat(productSwipers[i].children[0].children[2].classList[1]),
      prevEl: ".".concat(productSwipers[i].children[0].children[0].classList[1])
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      450: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 2
      },
      900: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
}
;
document.querySelectorAll('.swiper').forEach(function (n) {
  var bullets = document.querySelectorAll('.swiper-pagination-img');
  var mySwiper = new Swiper(n.querySelector('.swiper-container'), {
    direction: 'horizontal',
    initialSlide: 0,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3500
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'custom',
      bulletClass: 'swiper-pagination-img',
      renderCustom: function renderCustom(_mySwiper, current, total) {
        for (var _i = 1; _i <= total; _i++) {
          if (_i == current) {
            bullets[_i - 1].classList.add('active');
          } else {
            bullets[_i - 1].classList.remove('active');
          }
        }
      }
    }
  });
  var mySwiperInformation = new Swiper(n.querySelector('.swiper-container-information'), {
    direction: 'vertical',
    initialSlide: 0,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 4000
    },
    pagination: {
      el: '.swiper-pagination-info',
      clickable: true
    }
  });
});

//scroll
var menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  var onMenuLinkClick = function onMenuLinkClick(e) {
    var menuLink = e.target;
    if (menuLink.dataset["goto"] && document.querySelector(menuLink.dataset["goto"])) {
      var gotoBlock = document.querySelector(menuLink.dataset["goto"]);
      var gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').clientHeight;
      if (burgerMenu.classList.contains('active')) {
        document.body.classList.remove('lock');
        burgerMenu.classList.remove('active');
        checkbox.checked = false;
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  };
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}
;