import { useState } from 'react'
import Modal from 'react-modal'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

function App () {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal }/>
      <Dashboard />
      <NewTransactionModal
        isOpen={ isNewTransactionModalOpen }
        onRequestClose={ handleCloseNewTransactionModal }
      />
    </>
  )
}

export default App
