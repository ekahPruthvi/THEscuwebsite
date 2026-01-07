window.addEventListener('load', function() {
  this.document.getElementById('load').style.visibility = 'hidden';
});

function typeWriter(text, speed, elementId) {
    const element = document.getElementById(elementId);
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

setTimeout(() => {
    typeWriter("All around The world, computers are run by Entities.", 50, "one");
}, 2000);

setTimeout(() => {
    typeWriter("These Entities govern them and they have rules, that have to be followed.", 50, "two");
}, 8000);