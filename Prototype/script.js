function verificarConstrutor(item) {
  console.log(item.constructor.name);
}
function verificarMetodos(item) {
  console.log(Object.getOwnPropertyNames(item));
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa
Pessoas.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

const pessoa = new Pessoas('Thiago', 'Oliveira', 22);
console.log(pessoa.nomeCompleto());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

verificarMetodos(NodeList.prototype);
console.log('-------');
verificarMetodos(HTMLCollection.prototype);
console.log('-------');
verificarMetodos(document);
console.log('-------');

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HtmlElement
li.click; //function
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

verificarConstrutor(li);
verificarConstrutor(li.click);
verificarConstrutor(li.innerText);
verificarConstrutor(li.value);
verificarConstrutor(li.hidden);
verificarConstrutor(li.offsetLeft);
// verificarConstrutor(li.click());

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
verificarConstrutor(li.hidden.constructor.name);  
