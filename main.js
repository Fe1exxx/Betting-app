 // Mobile menu functionality
    const burger = document.querySelector('.header-burger');
    const mobileMenu = document.querySelector('.header-mobile-menu');
    const closeBtn = document.querySelector('.header-mobile-menu__close');
    const menuLinks = document.querySelectorAll('.header-mobile-menu__ul a');
    const body = document.body;

    function openMenu() {
      burger.classList.add('active');
      mobileMenu.classList.add('active');
      body.classList.add('menu-open');
    }

    function closeMenu() {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.classList.remove('menu-open');
    }

    burger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    closeBtn.addEventListener('click', closeMenu);

    // Close menu when clicking on links
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking on backdrop
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        closeMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
      }
    });



let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.ipl-carousel__dot');
const totalSlides = 2;

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Свайп для мобильных
let startX = 0;
track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});



// Бойские
const swiper = new Swiper('.matches-swiper', {
  slidesPerView: 'auto',      /* автоматический подсчёт видимых */
  spaceBetween: 24,           /* отступ между карточками */
  grabCursor: true,           /* курсор grab */
  
  navigation: {
    nextEl: '.matches-arrow--next',
    prevEl: '.matches-arrow--prev',
  },
  
  breakpoints: {
    // Mobile
    320: {
      slidesPerView: 1.2,     /* показываем 1.2 карточки */
      spaceBetween: 16,
    },
    // Tablet
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    // Desktop
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    }
  }
});


document.querySelectorAll('.reasons-item__toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.reasons-item');
    const text = item.querySelector('.reasons-item__text');
    
    text.style.display = text.style.display === 'none' ? 'block' : 'none';
    btn.textContent = btn.textContent === '+' ? '−' : '+';
  });
});


const reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.reviews-arrow--next',
    prevEl: '.reviews-arrow--prev',
  },
});