import React from "react";
import styles from "./Expenses.module.css";


function Expenses() {
  return (
    <div className={styles.maincontainer}>
      <div>
        <p className={styles.heading}>Top Expenses</p>
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <p>Entertainment</p>
          <div className={styles.barrep}></div>
        </div>
        <div className={styles.item}>
          <p>Food</p>
          <div className={styles.barrep2}></div>
        </div>
        <div className={styles.item}>
          <p>Travel</p>
          <div className={styles.barrep3}></div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
