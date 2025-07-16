// script.js

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  main.style.opacity = 0;
  main.style.transition = 'opacity 1.2s ease';
  setTimeout(() => {
    main.style.opacity = 1;
  }, 300);
});

const images = document.querySelectorAll('img');

images.forEach(img => {
  img.style.transition = 'transform 0.3s ease';
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'translateY(-4px) scale(1.02)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'translateY(0) scale(1)';
  });
});
