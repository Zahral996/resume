import React from "react";
import './Footer.css'
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Footer = () => (
 <div className="Footer">
    <div className="footer-container">
        <div className="name">
            <h2>Zahra Bidkhori</h2>
            <p>I am a motivated individual with a background in JavaScript, eager to start
            my career in front-end development</p>
        </div>
        <div className="links">
            <Link className="mylink" to="/about">About me</Link>
            <Link className="mylink" to="/contact">Contact me</Link>
        </div>
        <Link className="btn-link" to="/contact"><Button>Talk with me</Button></Link>
    </div>
 </div>
)

export default Footer;