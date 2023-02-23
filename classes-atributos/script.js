// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
  item.classList.add('ativo');
  console.log(item.getAttribute('class'));
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove('ativo');
});
menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs[0].setAttribute('alt', 'animal');

imgs.forEach((img) => {
  if (img.hasAttribute('alt')) {
    console.log(`Possui atributo alt`);
  } else {
    console.log('Não possui');
  }
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://google.com');
