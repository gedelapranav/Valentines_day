import './style.css'

// Heart Particle System
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerHTML = '❤️';
  
  // Random Position
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Random Size
  const size = Math.random() * 20 + 10; // 10px to 30px
  heart.style.fontSize = size + 'px';
  
  // Random Speed
  const duration = Math.random() * 3 + 4; // 4s to 7s
  heart.style.animationDuration = duration + 's';
  
  document.getElementById('heart-container').appendChild(heart);
  
  // Cleanup
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Create hearts periodically
setInterval(createHeart, 300);

// Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .paper').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'all 0.8s ease-out';
  observer.observe(el);
});

// Add visible class styling dynamically or in CSS (Doing in JS for simplicity here to match the observer logic)
// Actually better to add a class in CSS. Let's append a style rule or handle it in CSS.
// I'll add the class handling in CSS in next step if needed, currently just adding 'visible'.
// Let's manually handle the style change here for now to ensure it works without editing CSS immediately.
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) rotate(0) !important;
        }
        .paper.visible {
            transform: rotate(-1deg) !important;
        }
    `;
    document.head.appendChild(style);
});
