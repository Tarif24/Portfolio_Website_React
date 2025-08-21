import React from "react";
import BodySectionTemplate from "./BodySectionTemplate";
import ProjectCard from "./ProjectCard";
import Project1Img from "../assets/project-1.png";
import Project2Img from "../assets/project-2.png";
import Project3Img from "../assets/project-3.png";
import Project4Img from "../assets/project-4.png";
import Project5Img from "../assets/project-5.png";

const Projects = () => {
    return (
        <BodySectionTemplate
            subTitle="Browse My"
            title="Projects"
            id="projects"
            nextSection="contact"
        >
            <div className="my-16 grid 2xl:grid-cols-3 lg:grid-cols-2 gap-8">
                <ProjectCard
                    projectImg={Project5Img}
                    name="Build A Bot"
                    githubLink="https://github.com/Tarif24/Build_A_Bot_Frontend"
                    liveLink="https://buildabot.tarifmohammad.com/"
                    tech="AstraDB, Express.js, React.js, Node.js"
                    startDate="2025-4-25"
                    endDate="2025-7-5"
                />
                <ProjectCard
                    projectImg={Project4Img}
                    name="Job Search"
                    githubLink="https://github.com/Tarif24/Job_Listing_Website_React"
                    liveLink="https://joblisting.tarifmohammad.com/"
                    tech="MongoDB, Express.js, React.js, Node.js"
                    startDate="2025-1-12"
                    endDate="2025-2-24"
                />
                <ProjectCard
                    projectImg={Project3Img}
                    name="Game Browser"
                    githubLink="https://github.com/Tarif24/Game_Browser_Website"
                    liveLink="https://gamebrowser.tarifmohammad.com/"
                    tech="HTML, CSS, JS, Rawg.io API"
                    startDate="2024-11-23"
                    endDate="2025-1-12"
                />
                <ProjectCard
                    projectImg={Project2Img}
                    name="Mini Projects"
                    githubLink="https://github.com/Tarif24/Mini_Projects_Website_React"
                    liveLink="https://mini-projects.tarifmohammad.com/"
                    tech="React.js, Tailwind CSS"
                    startDate="2025-4-8"
                    endDate="N/A"
                />
                <ProjectCard
                    projectImg={Project1Img}
                    name="Elemental Wars"
                    githubLink="https://github.com/Tarif24/Elemental_Wars"
                    liveLink="https://tarif24.itch.io/elementalwars"
                    tech="C#, Unity"
                    startDate="2024-1-24"
                    endDate="2024-4-15"
                />
            </div>
        </BodySectionTemplate>
    );
};

export default Projects;
