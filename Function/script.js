// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');
const totalParagrafos = Array.prototype.reduce.call(
  paragrafos,
  (acum, item) => acum + item.innerText.length,
  0,
);
console.log(totalParagrafos);
// -------------- My method --------------
// const arrayParagrafos = Array.from(paragrafos);

// const soma = arrayParagrafos.reduce(
//   (acum, item) => acum + Number(item.innerText.trim().length),
//   0,
// );
// console.log('Resutlado soma: ', soma);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createElement(tag, classe, conteudo) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  conteudo ? (element.innerHTML = conteudo) : null;
  return element;
}

console.log(createElement('p', 'ativo', 'Teste'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1 = createElement.bind(null, 'h1', 'titulo');
console.log(h1('Titulo 1'));
