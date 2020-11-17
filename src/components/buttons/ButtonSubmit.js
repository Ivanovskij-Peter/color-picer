import React from 'react'
import styles from './Button.module.css'

const ButtonSubmit = ({ text }) => {
    return (
        <button type='submit' className={styles.button} >{text} </button>
    );
};

export default ButtonSubmit;