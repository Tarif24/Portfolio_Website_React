import React from "react";

const ProjectCard = ({projectImg, name, githubLink, liveLink}) => {
    const onGitHubClicked = () => {
        window.open(githubLink);
    }

    const onLiveClicked = () => {
        window.open(liveLink);
    }
    
    return (
        <div className="flex flex-col gap-6 items-center p-6 bg-[#ffffff] border-1 rounded-4xl border-[#555555] max-w-[26vw]">
            <img
                className="size-[90%] rounded-4xl border-1 border-[#555555]"
                src={projectImg}
                alt="Project 1 Image"
            />
            <h1 className="font-bold text-3xl">{name}</h1>
            <div className="flex gap-4">
                <button className="font-medium border-1 rounded-[4rem] border-[#555555] align-text-center p-3 w-[8rem] transition duration-300 ease-in-out hover:text-white hover:bg-[#555555] hover:cursor-pointer" onClick={onGitHubClicked}>
                    GitHub
                </button>
                <button className="font-medium border-1 rounded-[4rem] border-[#555555] align-text-center p-4 w-[8rem] transition duration-300 ease-in-out hover:text-white hover:bg-[#555555] hover:cursor-pointer" onClick={onLiveClicked}>
                    Live Demo
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
