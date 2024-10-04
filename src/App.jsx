import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Recent from './components/Down/RecentTransactions/Recent'
import Body from './components/Down/Body'
import Expenses from './components/Down/TotalExpenses/Expenses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='heading'>
       <p>Expense Tracker</p>
      </div>

      <Hero />
      <Body />
    </>
  )
}

export default App
