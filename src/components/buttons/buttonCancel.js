import React from 'react'
import styles from './Button.module.css'

const ButtonCancel = ({ text,onClick }) => {
    return (
        <button type='submit' className={styles.button} onClick={onClick}>{text} </button>
    );
};

export default ButtonCancel;