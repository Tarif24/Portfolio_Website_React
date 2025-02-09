import React from "react";

const ProjectCard = ({projectImg, name, githubLink, liveLink}) => {
    return (
        <div className="flex flex-col gap-6 items-center p-6 border-1 rounded-4xl border-[#555555] max-w-[30vw]">
            <img
                className="size-[90%] rounded-4xl"
                src={projectImg}
                alt="Project 1 Image"
            />
            <h1 className="font-bold text-3xl">{name}</h1>
            <div className="flex gap-4">
                <button className="font-medium border-1 rounded-[4rem] border-[#555555] align-text-center p-3 w-[8rem] transition duration-300 ease-in-out hover:text-white hover:bg-[#555555] hover:cursor-pointer">
                    GitHub
                </button>
                <button className="font-medium border-1 rounded-[4rem] border-[#555555] align-text-center p-4 w-[8rem] transition duration-300 ease-in-out hover:text-white hover:bg-[#555555] hover:cursor-pointer">
                    Live Demo
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
