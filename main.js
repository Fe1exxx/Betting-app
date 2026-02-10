// Mobile menu functionality
const burger = document.querySelector('.header-burger');
const mobileMenu = document.querySelector('.header-mobile-menu');
const menuLinks = document.querySelectorAll('.header-mobile-menu__ul li a');
const betNowBtn = document.querySelector('.header-mobile-menu__btn');
const body = document.body;

// Защита (на будущее)
if (!burger || !mobileMenu) {
  console.warn('Mobile menu elements not found');
} else {
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

  // Бургер
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Ссылки меню
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Кнопка Bet Now
  if (betNowBtn) {
    betNowBtn.addEventListener('click', closeMenu);
  }

  // Закрытие по клику вне меню или бургера
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('active')) return;

    const clickedInsideMenu = e.target.closest('.header-mobile-menu');
    const clickedInsideBurger = e.target.closest('.header-burger');

    if (!clickedInsideMenu && !clickedInsideBurger) {
      closeMenu();
    }
  });

  // Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}



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



const swiper = new Swiper('.matches-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  grabCursor: true,
  autoHeight: true, 

  navigation: {
    nextEl: '.matches-arrow--next',
    prevEl: '.matches-arrow--prev',
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 36,
    },
    420: {
      slidesPerView: 1.4,
      spaceBetween: 36,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
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

document.querySelectorAll('.reasons-item').forEach(item => {
  item.addEventListener('click', function (e) {
    // Не реагируем, если кликнута ссылка или интерактивный элемент внутри
    if (e.target.closest('.reasons-item__toggle') || e.target.tagName === 'A') return;

    const text = this.querySelector('.reasons-item__text');
    const toggleBtn = this.querySelector('.reasons-item__toggle');

    // Переключаем видимость
    const isVisible = getComputedStyle(text).display === 'block';   
    text.style.display = isVisible ? 'none' : 'block';
    
    // Меняем символ в кнопке
    toggleBtn.textContent = isVisible ? '+' : '−';
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