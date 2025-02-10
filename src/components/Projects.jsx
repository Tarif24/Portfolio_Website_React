import React from "react";
import BodySectionTemplate from "./BodySectionTemplate";
import ProjectCard from "./ProjectCard";
import Project1Img from "../assets/project-1.png";
import Project2Img from "../assets/project-2.png";
import Project3Img from "../assets/project-3.png";

const Projects = () => {
    return (
        <BodySectionTemplate subTitle="Browse My" title="Projects" id="projects">
            <div className="flex gap-8 flex-wrap py-24 justify-center items-center">
                <ProjectCard
                    projectImg={Project1Img}
                    name="Elemental Wars"
                    githubLink="https://github.com/Tarif24/Elemental_Wars"
                    liveLink="https://tarif24.itch.io/elementalwars"
                />
                <ProjectCard
                    projectImg={Project2Img}
                    name="Mini Projects"
                    githubLink="https://github.com/Tarif24/Mini_Projects_Website"
                    liveLink="https://mini-projects.wuaze.com/"
                />
                <ProjectCard
                    projectImg={Project3Img}
                    name="Game Browser"
                    githubLink="https://github.com/Tarif24/Game_Browser_Website"
                    liveLink="https://game-browser.wuaze.com"
                />
            </div>
        </BodySectionTemplate>
    );
};

export default Projects;
