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
