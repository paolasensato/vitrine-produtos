function formataValor(valor) {
  const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  return valorFormatado
}

export default formataValor
