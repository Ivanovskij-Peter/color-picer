import React, { useState } from 'react'
import ButtonCancel from './buttons/buttonCancel';
import ButtonSubmit from './buttons/ButtonSubmit';
import InputChange from './inputs/InputChange';
import Square from './square/Square'
import styles from './buttons/Button.module.css'


const App = () => {
    const [showInputChange, setShowInputChange] = useState(false);
    const [defaultR,defaultG,defaultB] =['0','128','128'];
    const [r, setR] = useState('1');
    const [g, setG] = useState('1');
    const [b, setB] = useState('1');
    let color = `${r},${g},${b}`;


    const onCancel = () => {
        setR(defaultR);
        setG(defaultG);
        setB(defaultB);        
        setShowInputChange(false);
    };


    return (
        <>
            <Square color={color} />
            <button className={styles.button} onClick={() => setShowInputChange(showInputChange => !showInputChange)}>{showInputChange ? 'Close input change' : 'Choose color'}</button>
            {showInputChange &&
                <>
                <InputChange color={r} setNewColor={setR} />
                <InputChange color={g} setNewColor={setG} />
                <InputChange color={b} setNewColor={setB} />
            </>}
            <ButtonCancel text={"Cancel"} onClick={onCancel} />
            <ButtonSubmit text={"Submit"} />
           
        </>
    );
    
};

export default App;