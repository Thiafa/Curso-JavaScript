// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
const p = document.querySelectorAll('p');
p.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

imgs.forEach((item, index, array) => {
  console.log(`[${index}] ${item.src}`);
});

const arrays = Array.from(imgs);

imgs.forEach(function (img, index, array) {
  console.log(index);
});
