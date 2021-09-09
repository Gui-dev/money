import incomeImg from './../../assets/images/income.svg'
import outcomeImg from './../../assets/images/outcome.svg'
import totalImg from './../../assets/images/total.svg'
import { Container } from './style'

// import { useTransaction } from './../../hooks/useTransaction'

export const Summary = () => {
  return (
    <Container>
      <section>
        <header>
          <h1>Entradas</h1>
          <img src={incomeImg} alt="Uma seta apontando para cima" title="Entradas" />
        </header>
        <strong>R$1.000,00</strong>
      </section>

      <section>
        <header>
          <h1>Saídas</h1>
          <img src={outcomeImg} alt="Uma seta apontando para baixo" title="Saídas" />
        </header>
        <strong>- R$1.000,00</strong>
      </section>

      <section className="highlight-background">
        <header>
          <h1>Total</h1>
          <img src={totalImg} alt="O símbolo de cifrão" title="Total" />
        </header>
        <strong>R$1.000,00</strong>
      </section>
    </Container>
  )
}
