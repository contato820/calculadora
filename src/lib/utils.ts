export function formataMoeda(valor: number) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function calcFixacao(nomeCaixa: string, nomeUn: string, qtdNecessaria: number, qtdPorCaixa: number, pPix: number, pCred: number) {
  let result = [];
  let caixas = Math.floor(qtdNecessaria / qtdPorCaixa);
  let resto = qtdNecessaria % qtdPorCaixa;
  
  if (resto >= qtdPorCaixa * 0.8) {
      caixas++;
      resto = 0;
  }
  
  if (caixas > 0) {
      result.push({ nome: nomeCaixa, qtd: caixas, un: 'cx', pPix: pPix, pCred: pCred });
  }
  
  if (resto > 0) {
      result.push({ nome: nomeUn, qtd: resto, un: 'un', pPix: pPix / qtdPorCaixa, pCred: pCred / qtdPorCaixa });
  }
  return result;
}