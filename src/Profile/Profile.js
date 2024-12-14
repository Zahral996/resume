import React from "react";
import './Profile.css'
import Image from "../Image/Image";
import myImage from '../Images/pjj.jpg'
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Profile = () =>(
    <div className="profile">
        <div className="my-profile">
            <Image imageSrc={myImage}/>
            <h2>I'm Zahra Bidkhori</h2>
        </div>
        <div className="content">
            <h3>Aspiring Front-End Developer with a Passion for JavaScript and Innovative Projects</h3>
            <p>Passionate front-end developer with a strong focus on JavaScript and a knack for creating innovative web applications. Proficient in HTML, CSS, and modern frameworks, I aim to transform ideas into engaging user experiences. Eager to contribute to dynamic projects and collaborate with teams to build responsive, user-friendly interfaces.</p>
            <div className="btns">
                <Link className="btn-link" to="/contact"><Button>Talk with me</Button></Link>
                <Link className="btn-link" to="/projects"><Button>see my works</Button></Link>
            </div>
        </div>
    </div>
)

export default Profile