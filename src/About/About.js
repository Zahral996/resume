import React from "react";
import Profile from "../Profile/Profile";
import './About.css'

const About = () => {
    return(
        <div>
            <Profile/>
            <div className="content-about">
                <h4>My Education and Experience Background</h4>
                <p>With a background in engineering and a strong focus on robotics and web development, I have cultivated a diverse skill set that bridges technology and education. I served as a Robotics Trainer at Sigma Robotic Company in Tehran from July 2019 to July 2020, where I honed my ability to teach complex concepts in an accessible manner. Currently, I am pursuing a Web Development program at the Tehran Institute of Technology, expected to complete in September 2024, while also holding a Master of Arts in English Language and Literature from Islamic Azad University, which I completed in September 2022. My academic journey began with a Bachelor's degree in Engineering Physics from Alzahra University, where I studied from January 2015 to January 2019. This blend of technical expertise and educational experience positions me uniquely in the fields of technology and communication.</p>
            </div>
        </div>
    )
}
export default About