import React from "react";
import './Input.css'

const Input = ({type, placeholder,label}) => {
    return (
        <div className="input">
            <label>{label} : </label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input;