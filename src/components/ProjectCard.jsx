import React from "react";

const ProjectCard = ({ projectImg, name, githubLink, liveLink }) => {
    const onGitHubClicked = () => {
        window.open(githubLink);
    };

    const onLiveClicked = () => {
        window.open(liveLink);
    };

    return (
        <div className="flex flex-1 flex-col gap-6 items-center p-6 bg-[#f7f7f7] border-2 rounded-4xl border-[#555555] lg:w-full md:w-[80%] justify-self-center">
            <img
                className="sm:size-[90%] size-[100%] rounded-4xl border-1 border-[#555555]"
                src={projectImg}
                alt="Project 1 Image"
            />
            <h1 className="font-bold sm:text-3xl text-1xl">{name}</h1>
            <div className="flex gap-4 sm:w-fit w-full">
                <button
                    className="sm:text-[1rem] text-[0.9rem] font-medium border-2 rounded-[4rem] border-[#555555] align-text-center p-3 sm:w-[8rem] flex-1 transition duration-300 ease-in-out hover:text-white hover:bg-[#555555] hover:cursor-pointer"
                    onClick={onGitHubClicked}
                >
                    GitHub
                </button>
                <button
                    className="sm:text-[1rem] text-[0.9rem] font-medium border-2 rounded-[4rem] border-[#555555] align-text-center p-4 sm:w-[8rem] flex-1 transition duration-300 ease-in-out hover:text-white hover:bg-[#555555] hover:cursor-pointer"
                    onClick={onLiveClicked}
                >
                    Live Demo
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
