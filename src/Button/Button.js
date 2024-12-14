import React from "react";
import './Button.css'

const Button = ({children, handleClick = () => {}}) => <button onClick={handleClick} className="btn">{children}</button>
export default Button;