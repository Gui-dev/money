import { Container, Content } from './style'
import logoImg from './../../assets/images/logo.svg'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="cifrão com o nome dtmoney do lado" title="Money" />
        <button
          onClick={ onOpenNewTransactionModal }
        >
          Nova transação
        </button>

      </Content>
    </Container>
  )
}
