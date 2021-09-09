import { formatDate, formatNumber } from '../../utils/formatValues'

import { Container } from './style'
import { useTransaction } from './../../hooks/useTransaction'

export const TransactionTable = () => {
  const { transactions } = useTransaction()

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
                <td className={ transaction.type }>
                  {transaction.type === 'withdraw' ? '-' : ''}
                  { formatNumber(transaction.amount) }
                </td>
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
