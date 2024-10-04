import React from "react";
import { useState } from "react";
import styles from "./Item.module.css";
import { IoPizzaOutline } from "react-icons/io5";
import { BsSuitcase2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ListItem({ item, date, price,idx }) {

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
    <div className={styles.bunch}>
      <div className={styles.container}>

        <div className={styles.left}>
          <div className={styles.icon}>
            {idx==0 ? <IoPizzaOutline /> : 
            idx==1 ? <BsSuitcase2 /> :
            <IoGiftOutline />}

          </div>
          <div className={styles.itemcontainer}>
            <p className={styles.item}>{item}</p>
            <p className={styles.item}>{date}</p>
          </div>
        </div>

      <div className={styles.right}>
      <p className={styles.righttext}>₹{price}</p>
      <div className={styles.cancelicon} >
      <MdOutlineCancel className={styles.iconstyle}/>
      </div>

      <button className={styles.editicon} >
      <LuPencil className={styles.iconstyle} onClick={openModal}/>
      </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Expenses"
        className={styles.modal}
        overlayClassName={styles.OverlayClass}
      >
        <h2 className={styles.modalheading}>Add Expenses</h2>
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

      <div className={styles.line}></div>
    </div>
  );
}

export default ListItem;
