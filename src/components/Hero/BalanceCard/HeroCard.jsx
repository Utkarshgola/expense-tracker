import React, { useEffect, useState } from 'react'
import styles from './HeroCard.module.css'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function HeroCard() {

    const [balance,setBalance]=useState("");

    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddExpense = () => {
    closeModal(); // Closing modal after adding expense
  };

    useEffect(()=>{
        localStorage.setItem("balance","5000")
        let bal=localStorage.getItem("balance")
        setBalance(bal);
    },[])


  return (
    <div className={styles.card}>
    <p className={styles.cardtext}>Wallet Balance: <span style={{color:" #89E148", fontWeight:"700"}}>₹4500</span> </p>
    <button onClick={openModal} className={styles.balancebutton}>+ Add Income</button>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Balance"
        className={styles.modal}
        overlayClassName={styles.OverlayClass}
      >
        <h2 className={styles.modalheading}>Add Balance</h2>
        <form className={styles.maincontainer}>
            <div className={styles.formcontainer}>
          <label>
    
            <input type="text" name="income" value="Income Amount"/>
          </label>
          
          </div>
          <br />
          <div className={styles.modalbuttoncontainer}>
          <button className={styles.modalbutton} type="button" onClick={handleAddExpense}>Add Expense</button>
          <button className={styles.modalbutton2} type="button" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default HeroCard