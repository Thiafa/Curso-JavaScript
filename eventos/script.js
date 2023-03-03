// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');
// const link = document.querySelector('.menu');

function handleClasse(event) {
  event.preventDefault();

  linksInternos.forEach((item) => {
    if (item.classList.contains('ativo')) {
      item.classList.remove('ativo');
    }
  });
  event.currentTarget.classList.add('ativo');
}

function handleClick(event) {
  event.preventDefault();
  console.log(event.target);
}

function handleRemove(event) {
  event.preventDefault();
  this.remove();
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleClasse);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelectorAll('body *');

body.forEach((item) => {
  item.addEventListener('click', handleClick);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

body.forEach((item) => {
  item.addEventListener('click', handleRemove);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
window.addEventListener('keydown', (event) => {
  if (event.key === 't') {
    document.documentElement.style = 'font-size: 120%';
  }
});
