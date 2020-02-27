import React from 'react';
import './button.css';
const Button = (props) => {
   
    return (
        <input className={props.className} type='button' value={props.text} onClick={props.handlerClick}/>
    )
}
export  default Button;