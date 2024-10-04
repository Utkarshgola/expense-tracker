import React from 'react'
import styles from './Body.module.css'
import Recent from './RecentTransactions/Recent'
import Expenses from './TotalExpenses/Expenses'

function Body() {
  return (
    <div className={styles.container}>
      <Recent />
      <Expenses />
      </div>
  )
}

export default Body