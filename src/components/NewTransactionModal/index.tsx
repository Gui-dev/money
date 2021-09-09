import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { useTransaction } from '../../hooks/useTransaction'

import closeImg from './../../assets/images/close.svg'
import incomeImg from './../../assets/images/income.svg'
import outcomeImg from './../../assets/images/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './style'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')
  const { createTransaction } = useTransaction()

  const handleSetTypeDeposit = () => {
    setType('deposit')
  }

  const handleSetTypeWithdraw = () => {
    setType('withdraw')
  }

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    const transaction = {
      title,
      amount,
      category,
      type
    }
    await createTransaction(transaction)
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={ isOpen }
      onRequestClose={ onRequestClose }
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={ handleCreateNewTransaction }>
        <button
          type="button"
          onClick={ onRequestClose }
          className="react-modal-close"
        >
          <img src={closeImg} alt="imagem de um x" title="Fechar modal"/>
        </button>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={ event => setTitle(event.target.value) }
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={ event => setAmount(Number(event.target.value)) }
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={ type === 'deposit' }
            activeColor="green"
            onClick={ handleSetTypeDeposit }
          >
            <img src={incomeImg} alt="uma seta apontando para cima" title="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={ type === 'withdraw' }
            activeColor="red"
            onClick={ handleSetTypeWithdraw }
          >
            <img src={outcomeImg} alt="uma seta apontando para baixo" title="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={ event => setCategory(event.target.value) }
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
