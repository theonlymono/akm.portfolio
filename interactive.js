// Navbar Starts

(function() {
  
    var Menu = (function() {
      var burger = document.querySelector('.burger');
      var menu = document.querySelector('.menu');
      var menuList = document.querySelector('.menu__list');
      var brand = document.querySelector('.menu__brand');
      var menuItems = document.querySelectorAll('.menu__item');
      
      var active = false;
      
      var toggleMenu = function() {
        if (!active) {
          menu.classList.add('menu--active');
          menuList.classList.add('menu__list--active');
          brand.classList.add('menu__brand--active');
          burger.classList.add('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.add('menu__item--active');
          }
          
          active = true;
        } else {
          menu.classList.remove('menu--active');
          menuList.classList.remove('menu__list--active');
          brand.classList.remove('menu__brand--active');
          burger.classList.remove('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.remove('menu__item--active');
          }
          
          active = false;
        }
      };
      
      var bindActions = function() {
        burger.addEventListener('click', toggleMenu, false);
      };
      
      var init = function() {
        bindActions();
      };
      
      return {
        init: init
      };
      
    }());
    
    Menu.init();
    
  }());

  // Navbar Ends

  // Works Starts

  const buttonPrev = document.querySelector('.button-space:first-child button');
  const buttonNext = document.querySelector('.button-space:last-child button');
  const cards = document.querySelectorAll('.cards-container .card');
  const dots = document.querySelectorAll('.card-nav .dot');
  
  let currentIndex = 0;
  
  function updateCards(newIndex) {
      cards.forEach((card, i) => {
          card.classList.remove('active', 'inactive');
          dots[i].classList.remove('active');
          
          if (i === newIndex) {
              card.classList.add('active');
              dots[i].classList.add('active');
          } else if (i === currentIndex) {
              card.classList.add('inactive'); // Slide out the old card
          }
      });
  
      currentIndex = newIndex;
  }
  
  buttonPrev.addEventListener('click', () => {
      const newIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCards(newIndex);
  });
  
  buttonNext.addEventListener('click', () => {
      const newIndex = (currentIndex + 1) % cards.length;
      updateCards(newIndex);
  });
  
  // Initialize the first card and dot
  updateCards(0);
  

  // Works Ends