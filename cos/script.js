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
    typeWriter("These Entities govern them and they have rules that have to be followed.", 50, "two");
}, 8000);

setTimeout(() => {
    typeWriter("Rules keep computers in check.", 50, "three");
}, 15000);

setTimeout(() => {
    typeWriter("Rules ensure uniformity.", 50, "four");
}, 20000);

setTimeout(() => {
    typeWriter("Rules makes smooth operations.", 50, "five");
}, 24000);

setTimeout(() => {
    this.document.getElementById('one').style.visibility = 'hidden';
    this.document.getElementById('two').style.visibility = 'hidden';
    this.document.getElementById('three').style.visibility = 'hidden';
    this.document.getElementById('four').style.visibility = 'hidden';
    this.document.getElementById('five').style.visibility = 'hidden';
    typeWriter("Rules Break", 50, "six");
}, 29000);