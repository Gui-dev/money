import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type TransactionProviderProps = {
  children: ReactNode
}

type TransactionProps = {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

type TransactionsContextProps = {
  transactions: TransactionProps[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = async (transactionInput: TransactionInput): Promise<void> => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction
    }}>
      { children }
    </TransactionsContext.Provider>
  )
}
