import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="Header">
        <nav>
            <ul>
                <li>
                    <Link className="logo" to="/">Zahra</Link>
                </li>
                <li>
                    <Link className="links" to="/about">About me</Link>
                </li>
                <li>
                    <Link className="links" to="/contact">Contact me</Link>
                </li>
            </ul>
        </nav>
        <Link className="btn-link" to="/projects"><Button>See my work</Button></Link>
    </div>
);

export default Header;