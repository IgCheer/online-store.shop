//=====================Burger

const iconBurger = document.querySelector('.icon-menu');
const body = document.querySelector('.body');
const menuBurger = document.querySelector('.menu__body');
iconBurger.addEventListener("click", function(event){
    if(event.target.closest('.icon-menu')) {
        iconBurger.classList.toggle('active');
        menuBurger.classList.toggle('active');
        document.body.classList.toggle('_lock');
    }
})

//=====================Прокрутка к нужному разделу меню

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    })


    function onMenuLinkClick(e) {
        if(e.target.dataset.goto && document.querySelector(e.target.dataset.goto)) {
            const gotoBlock = document.querySelector(e.target.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if(iconBurger.classList.contains('active')) {
                iconBurger.classList.remove('active');
                menuBurger.classList.remove('active');
                document.body.classList.remove('_lock');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
// ================== Popup Lk======================

const popupLinksLk = document.querySelectorAll('.popup-link');

// Все ссылки для открытия popup

popupLinksLk.forEach((popupLink) => {
    popupLink.addEventListener("click", function(e){
        const popupName = popupLink.getAttribute('href').replace('#','');
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        
        e.preventDefault();
    });
})

// Все ссылки для закрытия popup
const closePopupIconsLk = document.querySelectorAll('.close-popup');
closePopupIconsLk.forEach(function(item){
    item.addEventListener("click", function(e){
       popupCloseLk(item.closest('.popup-lk'));
       document.body.classList.remove('_lock');
       e.preventDefault();
    });
})


// Открытие popup
function popupOpen(currentPopup) {
    if(currentPopup) {
        const popupActive = document.querySelector('.popup-lk.open-lk');
        if(popupActive) {
            popupCloseLk(popupActive);
        }
    }
    currentPopup.classList.add('open-lk');
    currentPopup.addEventListener("click", function(e) {
        if(!e.target.closest('.popup-reg__content') || e.target.closest('.close-popup')) {
            popupCloseLk(e.target.closest('.popup-reg'));
            popupCloseLk(e.target.closest('.popup-lk'))
            document.body.classList.add('_lock');
        }
       
    })
}

// Функция закрытия popup
function popupCloseLk(popupActiveLk) {
    popupActiveLk?.classList?.remove('open-lk');
    document.body.classList.remove('_lock');
}






document.addEventListener("keydown", function(e){
    if(e.key === 'Escape') {
       const popupActiveLk = document.querySelector('.popup-lk');
       popupCloseLk(popupActiveLk);
       
       const popupActiveReg = document.querySelector('.popup-reg');
       popupCloseLk(popupActiveReg);
    }
})


//=====================Slider 1

new Swiper('.page-main__swiper', {

    pagination: {
        el: '.main-pagination',
        clickable: true,
      },

    // loop: true,

    autoHeight: true,
    
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    // mousewheel: {
    //     sensitivity: 1,
    //     eventsTarget: '.page-main__swiper',
    // },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    speed: 800,
})

//=====================Slider 2

new Swiper('.new__swiper', {

    navigation: {
        nextEl: '.new__next',
        prevEl: '.new__prev',
      },

    // loop: true,


    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    speed: 800,
    
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.new__swiper',
    },

    breakpoints: {
        100: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        474: {
            slidesPerView: 2.3,
            slidesPerGroup: 1,
            
        },
        804: {
            slidesPerView: 3.3,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3.5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
    }
    
})


/* Tabs */

const tabsButtons = document.querySelectorAll('[data-tabsbutton]');

const tabsElements = document.querySelectorAll('[data-tabsitem]');

document.addEventListener("click", function(event) {
  let currentActiveIndex;
  let newActiveIndex;
    if (event.target.closest('[data-tabsbutton]')) {
      tabsButtons.forEach((item, index) => {
        if (item.classList.contains('active')) {
          currentActiveIndex = index;
          item.classList.remove('active')
        }
        if (item === event.target) {
          newActiveIndex = index;
          event.target.classList.add('active');
        }
      });
      tabsElements[currentActiveIndex].classList.remove('active');
      tabsElements[newActiveIndex].classList.add('active');
        
  }
});


// ================== Popup ======================

const popupLinks = document.querySelectorAll('.popup-link');

// Все ссылки для открытия popup

if (popupLinks.length > 0) {
popupLinks.forEach((popupLink) => {
    popupLink.addEventListener("click", function(e){
        const popupName = popupLink.getAttribute('href').replace('#','');
        const currentPopup = document.getElementById(popupName);
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e){
            if(!e.target.closest('.popup__content')){
                popupClose(e.target.closest('.popup'));
            }
        });
        document.body.classList.add('_lock');
        e.preventDefault();
    });
})
}
// Функция закрытия popup
function popupClose(popupActive) {
    popupActive?.classList?.remove('open');
    document.body.classList.remove('_lock');
}


// Все ссылки для закрытия popup
const closePopupIcons = document.querySelectorAll('.close-popup');
if (closePopupIcons.length > 0) {
closePopupIcons.forEach(function(item){
    item.addEventListener("click", function(e){
       popupClose(item.closest('.popup'));
       document.body.classList.remove('_lock');
       e.preventDefault();
    });
})
}


document.addEventListener("keydown", function(e){
    if(e.key === 'Escape') {
       const popupActive = document.querySelector('.popup.open');
       popupClose(popupActive);
        
    }
})




//=========================


//Счетчик для всех товаров
window.addEventListener("click", function(e) {
    let counter;

    if(e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
    if(e.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    if(e.target.dataset.action === 'minus') {
       if(parseFloat(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
       } else if(e.target.closest('.body-cart__wrapper') && parseFloat(counter.innerText) === 1) {
        e.target.closest('.body-cart__item').remove();
        toggleCartStatus();
         calcCartPriceAndDelivery();
       }
    }
    if(e.target.hasAttribute('data-action') && e.target.closest('.body-cart__item')) {
        calcCartPriceAndDelivery();
    }
})  

//Добавление товара в корзину
const cartWrapper = document.querySelector('.body-cart__wrapper');

window.addEventListener("click", function(e) {
    if(e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.item-tabs__item');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.image').getAttribute('src'),
            title: card.querySelector('.item-tabs__title').innerText,
            price: card.querySelector('.price-item__current').innerText,
            counter: card.querySelector('[data-counter]').innerText,
    
        }
        //Суммирование одинаковых товаров в корзину

const itemInCart = cartWrapper.querySelector(`[data-id = "${productInfo.id}"]`);

if(itemInCart) {
    const counterElement = itemInCart.querySelector('[data-counter]');
    counterElement.innerText = parseFloat(counterElement.innerText) + parseFloat(productInfo.counter);
} else {
    const cartItemHTML = ` <div class="body-cart__item" data-id="${productInfo.id}">
                                    
    <div class="item-cart__image">
        <img src="${productInfo.imgSrc}" alt="">
    </div> 
    <div class="item-cart__info">
    <div class="item-cart__title">${productInfo.title}</div>
    
    <div class="item-tabs__price price-item item-cart">
    <div class="price__group">
    <span class="total-price__dollar">$</span>
    <span class="price-item__current">${productInfo.price}</span>
    </div>
        <div class="items items--small item-cart__small counter-wrapper">
            <div class="item-cart__control" data-action="minus">-</div>
            <div class="item-cart__number" data-counter>${productInfo.counter}</div>
            <div class="item-cart__control" data-action="plus">+</div>
        </div>
    </div>
    </div>
    
   
</div>`;

    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        }
        card.querySelector('[data-counter]').innerText = '1';
        toggleCartStatus();
        calcCartPriceAndDelivery();
    }
})

function toggleCartStatus() {
    const cartWrapper = document.querySelector('.body-cart__wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
   
    if(cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
    } else {
        cartEmptyBadge.classList.remove('none');
    }

    const orderForm = document.querySelector('#order-form');

    if(cartWrapper.children.length > 0) {
        orderForm.classList.remove('none');
    } else {
        orderForm.classList.add('none');
    }
}

function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.body-cart__item');

    const totalPriceEl = document.querySelector('.total-price__total');
    
    let totalPrice = 0;
   
   cartItems.forEach(function(item) {
    
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price-item__current');
    const currentPrice = parseFloat(amountEl.innerText) * parseFloat(priceEl.innerText);

    totalPrice = totalPrice + currentPrice;
   
    
   
   })
    const num = totalPrice;
    totalPriceEl.innerText = num.toFixed(2);
    
} 


/* Tabs Dashboard */

const tabsButtonsDash = document.querySelectorAll('.tabs-goods__button');

const tabsElementsDash = document.querySelectorAll('.tabs-goods__item');

document.addEventListener("click", function(event) {
  let currentActiveIndex;
  let newActiveIndex;
    if (event.target.closest('.tabs-goods__button')) {
      tabsButtonsDash.forEach((item, index) => {
        if (item.classList.contains('active')) {
          currentActiveIndex = index;
          item.classList.remove('active')
        }
        if (item === event.target) {
          newActiveIndex = index;
          event.target.classList.add('active');
        }
      });
      tabsElementsDash[currentActiveIndex].classList.remove('active');
      tabsElementsDash[newActiveIndex].classList.add('active');
        
  }
});


// ================== Popup Dashboard======================

const popupLinksDashboard = document.querySelectorAll('.popup-link');

// const body = document.querySelector('body');


// Все ссылки для открытия popup

popupLinksDashboard.forEach((popupLink) => {
    popupLink.addEventListener("click", function(e){
        const popupName = popupLink.getAttribute('href').replace('#','');
        const currentPopup = document.getElementById(popupName);
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e){
            if(!e.target.closest('.popup-cart__content')){
                popupCloseDashboard(e.target.closest('.cart-dashboard__popup'));
            }
        });
        document.body.classList.add('_lock');
        e.preventDefault();
    });
})

// Функция закрытия popup
function popupCloseDashboard(popupActiveDashboard) {
    popupActiveDashboard?.classList?.remove('open');
    document.body.classList.remove('_lock');
}


// Все ссылки для закрытия popup
const closePopupIconsDashboard = document.querySelectorAll('.close-popup');
closePopupIconsDashboard.forEach(function(item){
    item.addEventListener("click", function(e){
       popupCloseDashboard(item.closest('.cart-dashboard__popup'));
       document.body.classList.remove('_lock');
       e.preventDefault();
    });
})



document.addEventListener("keydown", function(e){
    if(e.key === 'Escape') {
       const popupActiveDashboard = document.querySelector('.cart-dashboard__popup.open');
       popupClose(popupActiveDashboard);
        
    }
})



//===================== Show More Blog

const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.blog__item').length;
let items = 3;

showMore.addEventListener("click", function(){
    items += 3;
    const array = Array.from(document.querySelector('.blog__items').children);
    const visibleItems = array.slice(0, items);

    visibleItems.forEach((el) => {
        el.classList.add('visible');
    }) 

    if(visibleItems.length === productsLength) {
        showMore.style.display = 'none';
    }
})



// ================== Accordeon ======================


const accHeading = document.querySelectorAll(".accordeon__title");
const accPanel = document.querySelectorAll(".accordeon__content");


accHeading.forEach(function(item){
    item.addEventListener("click", function(){
        if (item.nextElementSibling.style.maxHeight) {
            hidePanels();     // Скрыть все открытые панели
         } else {
            showPanel(item);  // Показать панель
         } 
    })
})


// Функция для отображения панели
function showPanel(elem) {
  hidePanels();
  elem.classList.add("open-accordeon-answers");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}

// Функция для скрытия всех отображаемых панелей
function hidePanels() {
  for (let i = 0; i < accPanel.length; i++) {
      accPanel[i].style.maxHeight = null;
      accHeading[i].classList.remove("open-accordeon-answers");
  }
}
