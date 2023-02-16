// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagem);
// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2.innerText);

// Selecione o último p do site
const lastP = document.querySelectorAll('p');
const arrayP = Array.from(lastP);
console.log(arrayP[arrayP.length - 1]);

const animaisId = document.getElementById('animais');
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');
const primeiroUl = document.querySelector('ul');
const primeiroLi = primeiroUl.querySelector('li');

const linksInternos = document.querySelectorAll('.animais img');

// Retorna um objeto
console.log(animaisId);

// Retornam HTML Collection
console.log(gridSection);
console.log(contato);
console.log(primeiroUl);
console.log(primeiroLi);
console.log(linkInterno.innerText);

// Retorna uma NodeList
console.log(linksInternos);

// Html Collection vs Node List

const arrayLink = Array.from(linksInternos);

linksInternos.forEach((item, index) => {
  console.log(index, item);
});

arrayLink.forEach((item, index) => {
  console.log(index, item);
});
