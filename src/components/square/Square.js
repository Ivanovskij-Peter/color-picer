import React  from 'react'
import styles from './Square.module.css'

const Square = ({color}) => {
   
    return (
        <div className={styles.container} style={{backgroundColor:`rgb(${color})`}}>    
        </div>
    )
    
}
export default Square;