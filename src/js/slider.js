import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Keyboard,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SLIDER_CONFIG = {
  SPEED: 500,
  AUTOPLAY_DELAY: 5000,
};

export function initSlider() {
  const swiperContainer = document.querySelector(".benefits-slider .swiper");
  if (!swiperContainer) return null;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return new Swiper(swiperContainer, {
    modules: [Navigation, Pagination, Keyboard, A11y, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: prefersReducedMotion ? 0 : SLIDER_CONFIG.SPEED,
    autoplay: prefersReducedMotion
      ? false
      : {
          delay: SLIDER_CONFIG.AUTOPLAY_DELAY,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
    navigation: {
      nextEl: ".benefits-slider__btn--next",
      prevEl: ".benefits-slider__btn--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      enabled: true,
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      containerMessage: "Benefits carousel",
      containerRoleDescriptionMessage: "carousel",
      itemRoleDescriptionMessage: "slide",
    },
  });
}
