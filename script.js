const peopleElem = document.getElementById('people-count');
let base = 1338;
setInterval(() => {
  let fluctuation = Math.floor(Math.random() * 8 - 4);
  let count = base + fluctuation;
  peopleElem.textContent = count + " People are on website";
}, 2500);
