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

const buttonContainer = document.querySelector('.button-container');
const allButtons = buttonContainer.querySelectorAll('button');

const urls = [
  'locallink.html',   
  'cynageos.html',   
  'business/business.html',   
  'contact.html'       
];


allButtons.forEach((btn, i) => btn.addEventListener('click', () => {
  document.body.style.background = '#136dffff';
  document.body.classList.add('border-effect');
  buttonContainer.classList.add('header-mode');
  allButtons.forEach(b => b.disabled = true);

  setTimeout(() => {
    window.location.href = urls[i];
  }, 1200);
}));

function changeBackground() {
  bg.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

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
        bubbleText.style.fontSize = '2.2em';
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

setTimeout(() => {
  const element = document.getElementById('text2');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 2000);

const text2 = document.getElementById('text2');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      buttonContainer.classList.add('visible');
    } else {
      buttonContainer.classList.remove('visible');
    }
  });
}, { threshold: 0.55 });

if (text2) observer.observe(text2);

setInterval(changeBackground, 200);
changeBackground();
animate();
