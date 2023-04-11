// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nomePessoa, idadePessoa) {
  this.nome = nomePessoa;
  this.idade = idadePessoa;
  this.andar = function () {
    console.log(this.nome + ' andou');
  };
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elemento) {
  const elements = document.querySelectorAll(elemento);
  this.addClass = function () {
    elements.forEach((item) => item.classList.add('classe'));
  };
  this.removeClass = function () {
    elements.forEach((item) => item.classList.remove('classe'));
  };
}

const li = new Dom('li');
console.log(li);
li.addClass();
