export const formatDate = (date: string) => {
  const result = new Intl.DateTimeFormat('pt-BR').format(new Date(date))
  return result
}

export const formatNumber = (value: number) => {
  const result = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return result
}
