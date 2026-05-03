// src/composables/useReveal.js
import { onMounted, onUnmounted } from 'vue';

export function useReveal() {
  let observer;

  onMounted(() => {
    const revealElements = document.querySelectorAll('.reveal');

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });
}
