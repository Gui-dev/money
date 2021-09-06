import { Container, Content } from './style'
import logoImg from './../../assets/images/logo.svg'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="cifrão com o nome dtmoney do lado" title="Money" />
        <button>Nova transação</button>
      </Content>
    </Container>
  )
}
