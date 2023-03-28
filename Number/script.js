// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);
// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
let numerosArray = numeros.split(', ');
console.log(Math.max(...numerosArray));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limparPrecos(preco) {
  let numero = +preco.toLowerCase().trim().replace('r$ ', '').replace(',', '.');
  return +numero.toFixed(2);
}
let soma = 0.0;
listaPrecos.forEach((preco) => {
  soma += limparPrecos(preco);
});
console.log(soma);
