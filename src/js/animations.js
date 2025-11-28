const OBSERVER_CONFIG = {
  root: null,
  rootMargin: "0px 0px -50px 0px",
  threshold: 0.1,
};

const ANIMATION_SELECTORS = ".reveal, .fade-in, .slide-up";

export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const elements = document.querySelectorAll(ANIMATION_SELECTORS);

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, OBSERVER_CONFIG);

  elements.forEach((el) => observer.observe(el));
}

export function addStaggeredDelays(parentSelector, childSelector) {
  document.querySelectorAll(parentSelector).forEach((container) => {
    container.querySelectorAll(childSelector).forEach((child, index) => {
      child.classList.add(`reveal--delay-${index + 1}`);
    });
  });
}
