const panels = document.querySelectorAll('.panel');
const buttonContainer = document.querySelector('.page-header');
const allButtons = buttonContainer.querySelectorAll('button');

const urls = [
  'locallink.html',   
  'cynageos.html',   
  '/index.html#text2',   
  'contact.html'       
];

function activatePanel(panel) {
    panels.forEach(p => {
        if (p === panel) {
        p.classList.add('active');
        } else {
        p.classList.remove('active');
        }
    });
    }
    panels.forEach(panel => {
    panel.addEventListener('click', () => {
        activatePanel(panel);
    });
});

allButtons.forEach((btn, i) => btn.addEventListener('click', () => {
    window.location.href = urls[i];
}));


const inp1 = document.querySelector('.upinp')
const inp2 = document.querySelector('.downinp')
const custBtn = document.getElementById('custbtn');

function updateButtonText() {
  if (inp1.value.trim() !== '' || inp2.value.trim() !== '') {
    custBtn.textContent = 'Search';
  } else {
    custBtn.textContent = 'New Customer';
  }
}

inp1.addEventListener('input', updateButtonText);
inp2.addEventListener('input', updateButtonText);

updateButtonText();

const window1 = document.getElementById('window1');
const window2 = document.getElementById('window2');
const nameout = document.getElementById('name');
const number = document.getElementById('number');
const mail = document.getElementById('mai');
const cards = document.querySelectorAll('.card');
const genbtn = document.getElementById('gen');
const genbtn1 = document.getElementById('gen1');

custBtn.addEventListener('click', () => {
  if (custBtn.textContent.trim() === 'Search') {
    const nameinp = inp1.value.trim();
    const numinp = inp2.value.trim();

    nameout.textContent = nameinp;
    number.textContent = "Number: " + numinp;
    mail.textContent = "Mail: " + nameinp + "@mail.ye"
    window1.classList.add('hiddenw');
    window2.classList.remove('hiddenw');
    showToast('Quote searches the database (very quickly) and findes your customer.');
  } else {
    showToast('That button is not a part of your expirence yet :(', 3000);
  }
});

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('sel_q')) {
      card.classList.remove('sel_q');
      genbtn.classList.remove('sel');
      genbtn1.classList.remove('sel');
    } else {
      cards.forEach(c => c.classList.remove('sel_q'));
      card.classList.add('sel_q');
      genbtn.classList.add('sel');
      genbtn1.classList.add('sel');
    }
  });
});

function showToast(message, duration = 5000) {
  const container = document.getElementById('toast-container');

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

