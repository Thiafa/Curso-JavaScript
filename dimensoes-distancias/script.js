// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');
console.log(firstImg);
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
let soma = 0;
function somaImagens() {
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    const rect = img.getBoundingClientRect();
    soma += rect.width;
  });
  console.log('Soma de todas as imagens: ', soma);
}

window.onload = () => {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const rect = link.getBoundingClientRect();
  if (rect.width >= 48 && rect.height >= 48) {
    console.log('Tamanho minimo recomendado');
  } else console.log('Não possui o tamanho minimo recomendado');
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector('.menu');

if (small.matches) {
  menu.classList.add('menu-mobile');
  console.log('Contém menu-mobile: ', menu.classList.contains('menu-mobile'));
} else {
  menu.classList.remove('menu-mobile');
  console.log('Contém menu-mobile: ', menu.classList.contains('menu-mobile'));
}
