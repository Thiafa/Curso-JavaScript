function exercicios() {
  // Utilizando o foreach na array abaixo,
  // some os valores de Taxa e os valores de Recebimento

  const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  const valoresTaxa = transacoes.filter((item) =>
    item.descricao.startsWith('Taxa'),
  );
  const valoresRecebminento = transacoes.filter((item) =>
    item.descricao.startsWith('Recebimento'),
  );

  let somaTaxa = 0;
  let somaRecebimento = 0;
  function transformar(item, somaTaxa) {
    return Number(item.valor.replace('R$ ', ''));
  }

  valoresTaxa.forEach((item) => {
    somaTaxa += transformar(item);
  });

  valoresRecebminento.forEach((item) => {
    somaRecebimento += transformar(item);
  });
  console.log(somaTaxa, somaRecebimento);

  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  console.log(transportes.split(';'));

  // Substitua todos os span's por a's
  const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

  const htmlTransformado = html.split('span');

  const htmlFinalizado = htmlTransformado.join('a');
  console.log(htmlFinalizado);
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase.charAt(frase.length - 1));
  // Retorne o total de taxas
  const transacoes1 = [
    'Taxa do Banco',
    '   TAXA DO PÃO',
    '  taxa do mercado',
    'depósito Bancário',
    'TARIFA especial',
  ];

  let soma = 0;
  transacoes1.forEach((item) => {
    if (item.toLowerCase().trim().includes('taxa')) {
      soma += 1;
    }
  });
  console.log(soma);
}
exercicios();
