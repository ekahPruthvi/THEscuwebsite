const bubble = document.querySelector('.glass-bubble');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let bubbleX = mouseX, bubbleY = mouseY;

let isHover = false;

const easing = 0.1;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener('mousemove', e => {
  let elem = document.elementFromPoint(e.clientX, e.clientY);
  if (elem && elem.classList.contains('hover-target')) {
    if (!isHover) {
      isHover = true;
      const rect = elem.getBoundingClientRect();
      bubble.style.width = rect.width + 'px';
      bubble.style.height = rect.height + 'px';
      bubble.style.borderRadius = '12px';
      bubble.style.backdropFilter = 'blur(0px)';
    }
  } else if (isHover) {
    isHover = false;
    bubble.style.width = '20px';
    bubble.style.height = '20px';
    bubble.style.borderRadius = '30%';
    bubble.style.backdropFilter = 'blur(8px)';
  }
});

function animate() {
  const distX = mouseX - bubbleX;
  const distY = mouseY - bubbleY;
  bubbleX += distX * easing;
  bubbleY += distY * easing;

  bubble.style.transform = `translate(${bubbleX}px, ${bubbleY}px) translate(-20%, -50%)`;

  requestAnimationFrame(animate);
}

  animate();