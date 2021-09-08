import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { formatDate, formatNumber } from '../../utils/formatValues'

import { Container } from './style'

type TransactionProps = {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          { transactions.map(transaction => {
            return (
              <tr key={ String(transaction.id) }>
                <td>{ transaction.title }</td>
                <td className={ transaction.type }>{ formatNumber(transaction.amount) }</td>
                <td>{ transaction.category }</td>
                <td>{ formatDate(transaction.createdAt) }</td>
              </tr>
            )
          }) }

        </tbody>
      </table>
    </Container>
  )
}
