import React from 'react';

const InputChange = ({color,setNewColor}) => {

    const ChangeInputValue = (e) => {
         setNewColor(e.target.value);
    };

    return (
        <form >
            <input type='range' min={"0"} max={"255"} onChange={ChangeInputValue} value={color}  name='firstValue'/>
            <label >{color}</label>
        </form>
    );
    
};

export default InputChange;