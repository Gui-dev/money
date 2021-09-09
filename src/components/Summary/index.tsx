import incomeImg from './../../assets/images/income.svg'
import outcomeImg from './../../assets/images/outcome.svg'
import totalImg from './../../assets/images/total.svg'
import { Container } from './style'

import { useTransaction } from './../../hooks/useTransaction'
import { formatNumber } from '../../utils/formatValues'

export const Summary = () => {
  const { transactions } = useTransaction()

  const summary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'deposit') {
      accumulator.deposits += transaction.amount
      accumulator.total += transaction.amount
    } else {
      accumulator.withdraws += transaction.amount
      accumulator.total -= transaction.amount
    }

    return accumulator
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <section>
        <header>
          <h1>Entradas</h1>
          <img src={incomeImg} alt="Uma seta apontando para cima" title="Entradas" />
        </header>
        <strong>{ formatNumber(summary.deposits) }</strong>
      </section>

      <section>
        <header>
          <h1>Saídas</h1>
          <img src={outcomeImg} alt="Uma seta apontando para baixo" title="Saídas" />
        </header>
        <strong>- { formatNumber(summary.withdraws) }</strong>
      </section>

      <section className="highlight-background">
        <header>
          <h1>Total</h1>
          <img src={totalImg} alt="O símbolo de cifrão" title="Total" />
        </header>
        <strong>{ formatNumber(summary.total) }</strong>
      </section>
    </Container>
  )
}
