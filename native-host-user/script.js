// Liste 5 objetos nativos
console.log('Nativos');
console.log(Infinity);
console.log(NaN);
console.log(undefined);
console.log(null);
console.log(String);

console.log('-----------------------');
console.log('Browser');
// Liste 5 objetos do browser
console.log(DocumentType);
console.log(Document);
console.log(window);
console.log(Document.name);
console.log(HTMLElement);

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitCancelFullScreen != 'undefined') {
  console.log('Existe');
} else {
  console.log('Não existe');
}
if (typeof document.webkitCancelFullScreen != 'undefined') {
  console.log('Existe');
} else {
  console.log('Não existe');
}
