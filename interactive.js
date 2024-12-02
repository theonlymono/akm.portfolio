// Back to top starts
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
if (window.scrollY > 150) {
backToTopButton.style.opacity = '1';
backToTopButton.style.visibility = 'visible';
} else {
backToTopButton.style.opacity = '0';
backToTopButton.style.visibility = 'hidden';
}
});

backToTopButton.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
// Back to top ends

// Navbar Starts

(function() {
  var Menu = (function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');
    var brand = document.querySelector('.menu__brand');
    var menuItems = document.querySelectorAll('.menu__item');
    
    var active = false;
    
    // Toggle menu open and closed
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
    
    // Smooth scroll and close menu on link click
    var scrollToSection = function(e) {
      e.preventDefault();  // Prevent the default anchor click behavior
      
      var target = document.querySelector(this.getAttribute('href'));
      
      // Smooth scroll to the target section
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Close the menu
      if (active) {
        toggleMenu();
      }
    };
    
    var bindActions = function() {
      burger.addEventListener('click', toggleMenu, false);
      
      // Add click event to each menu link
      var menuLinks = document.querySelectorAll('.menu__link');
      menuLinks.forEach(function(link) {
        link.addEventListener('click', scrollToSection, false);
      });
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();
})();


  // Navbar Ends

  // Intro Starts
  
  // Add smooth scroll behavior to 'Projects' and 'Contact' buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

  
  // Intro Ends

  // Works Starts

  const buttonPrev = document.querySelector('.button-space:first-child button');
  const buttonNext = document.querySelector('.button-space:last-child button');
  const cardsContainer = document.querySelector('.cards-container');
  const cards = cardsContainer.querySelectorAll('.card');
  const cardNav = document.querySelector('.card-nav');
  
  let currentIndex = 0;
  
  // Generate dots dynamically based on the number of cards
  function generateDots() {
      cardNav.innerHTML = ''; // Clear existing dots
      cards.forEach((_, i) => {
          const dot = document.createElement('div');
          dot.classList.add('dot');
          if (i === currentIndex) dot.classList.add('active'); // Highlight the first dot initially
          dot.addEventListener('click', () => updateCards(i)); // Add click event for dot navigation
          cardNav.appendChild(dot);
      });
  }
  
  // Update cards and dots dynamically
  function updateCards(newIndex) {
      const dots = cardNav.querySelectorAll('.dot');
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
  
  // Initialize dots and the first card
  generateDots();
  updateCards(0);
  
  // Changing text when hover over button "Live Demo"
  const textBox = document.getElementById('unavailable');
  textBox.addEventListener('mouseover', () => {
      textBox.textContent = 'Unavailable';
  });
  textBox.addEventListener('mouseout', () => {
      textBox.textContent = 'Live Demo';
  });
  
  // Works Ends