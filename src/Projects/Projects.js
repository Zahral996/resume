import React from "react";
import Work from "../Work/Work";
import './Projects.css'

const Projects = () => (
    <div className="projects">
        <h3>My Projects</h3>
        <div className="project-container">
            <Work title={"Next Week With Us"} link={"https://nextweekwithus.com/"} description={"Designed and developed a responsive website  using Figma for UI/UX design, JavaScript and jQuery for functionality, Tailwind for CSS"}/>
            <Work title={"Filimo project"} link={"https://zahral996.github.io/filimoProject"} description={" Implementation of the Filimo website using Vite, Vanilla JavaScript, Fetching data from Api"}/>
            <Work title={"Finsweet project"} link={"ttps://zahral996.github.io/finsweet"} description={"Implementation of the Finsweet website. Responsive design"}/>
            <Work title={"Golestan tea project"} link={"https://zahral996.github.io/golestanProducts"} description={"Implementation of the landing page of Golestan tea website"}/>
        </div>

    </div>
)

export default Projects