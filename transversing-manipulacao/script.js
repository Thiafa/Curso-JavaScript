// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const menuClone = menu.cloneNode(true);
console.log(menuClone);

const copy = document.querySelector('.copy');

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq dl dt');
console.log(faq);

// Selecione o DD referente ao primeiro DT
console.log(faq.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');
const elFaq = document.querySelector('.faq');

elFaq.replaceChild(animais, elFaq);
