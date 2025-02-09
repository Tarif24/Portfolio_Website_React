import React from "react";
import BodySectionTemplate from "./BodySectionTemplate";
import ProjectCard from "./ProjectCard";
import Project1Img from "../assets/project-1.png";

const Projects = () => {
    return (
        <BodySectionTemplate subTitle="Browse My" title="Projects">
            <div className="flex gap-8 flex-wrap py-24 justify-center items-center">
                <ProjectCard
                    projectImg={Project1Img}
                    name="Elemental Wars"
                    githubLink=""
                    liveLink=""
                />
                <ProjectCard
                    projectImg={Project1Img}
                    name="Elemental Wars"
                    githubLink=""
                    liveLink=""
                />
                <ProjectCard
                    projectImg={Project1Img}
                    name="Elemental Wars"
                    githubLink=""
                    liveLink=""
                />
            </div>
        </BodySectionTemplate>
    );
};

export default Projects;
