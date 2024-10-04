import React, { useEffect, useState } from 'react'
import styles from './ExpenseCard.module.css'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ExpenseCard() {


    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddExpense = () => {
    // Handle the add expense logic here
    closeModal(); // Close modal after adding expense
  };



  return (
    <div className={styles.card}>
    <p className={styles.cardtext}>Expenses: <span style={{color:"rgba(244, 187, 74, 1)", fontWeight:"700"}}>₹500</span> </p>
    <button onClick={openModal} className={styles.balancebutton}>+ Add Expense</button>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Expenses"
        className={styles.modal}
        overlayClassName={styles.OverlayClass}
      >
        <h2 className={styles.modalheading}>Edit Expenses</h2>
        <form>
            <div className={styles.formcontainer}>
          <label>
    
            <input type="text" name="title" value="Title"/>
          </label>
          <br />
          <label>
            
            <input type="text" name="price" value="Price"/>
          </label>
          <br />
          <label>
            
            <input type="text" name="category" value="Select Category"/>
          </label>
          <br />
          <label>
            
            <input type="text" name="date"  value="dd/mm/yyyy"/>
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

export default ExpenseCard