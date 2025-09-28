const bubble = document.querySelector('.glass-bubble');
const bg = document.querySelector('body');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let bubbleX = mouseX, bubbleY = mouseY;
let isHover = false;
const easing = 0.1;
let bubbleText = bubble.querySelector('.bubble-text');
if (!bubbleText) {
  bubbleText = document.createElement('div');
  bubbleText.classList.add('bubble-text');
  bubble.appendChild(bubbleText);
}

const images = [
  '/images/bg1.png',
  '/images/bg2.png',
  '/images/bg3.png',
  '/images/bg4.png',
  '/images/bg5.png',
  '/images/bg6.png'
];
let current = 0;

function changeBackground() {
  bg.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

// Combined event listener for mousemove
window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  let elem = document.elementFromPoint(mouseX, mouseY);
  if (elem && elem.classList.contains('hover-target')) {
    if (!isHover) {
      isHover = true;
      const rect = elem.getBoundingClientRect();
      bubble.style.width = rect.width + 'px';
      bubble.style.height = rect.height + 'px';
      bubble.style.borderRadius = '100px';
      bubble.style.backdropFilter = 'blur(20px)';

      showTextTimeout = setTimeout(() => {
        bubbleText.textContent = elem.textContent.trim();
        bubbleText.style.pointerEvents = 'none';
        bubbleText.style.fontFamily = " 'League Script', cursive";
        bubbleText.style.color = 'white';
        bubbleText.style.fontSize = '3.2em';
        bubbleText.style.textAlign = 'center';
        bubbleText.style.position = 'relative';
        bubbleText.style.top = '50%';
        bubbleText.style.transform = 'translateY(-50%)';
      }, 200);
    }
  } else if (isHover) {
    isHover = false;
    bubble.style.width = '20px';
    bubble.style.height = '20px';
    bubble.style.borderRadius = '30%';
    bubble.style.backdropFilter = 'blur(8px)';

    clearTimeout(showTextTimeout);
    bubbleText.textContent = '';
  }
});

function animate() {
  const distX = mouseX - bubbleX;
  const distY = mouseY - bubbleY;
  bubbleX += distX * easing;
  bubbleY += distY * easing;

  bubble.style.transform = `translate(${bubbleX}px, ${bubbleY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animate);
}

setInterval(changeBackground, 200);
changeBackground();
animate();
