import './scss/main.scss';
import { inject } from '@vercel/analytics';

import { initSlider } from './js/slider.js';
import { initScrollAnimations } from "./js/animations.js";

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    initScrollAnimations();
    initSmoothScroll();
    inject();
});


