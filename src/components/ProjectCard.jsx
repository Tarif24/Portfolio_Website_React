import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

const ProjectCard = ({ projectImg, name, githubLink, liveLink }) => {
    const [isAboutActive, setIsAboutActive] = useState(false);

    const onGitHubClicked = () => {
        window.open(githubLink);
    };

    const onLiveClicked = () => {
        window.open(liveLink);
    };

    const aboutStyle = `absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-gray-100 rounded-4xl border-[#555555] lg:w-full ${isAboutActive ? "block" : "hidden"}`;

    return (
        <div className="relative flex flex-1 flex-col gap-6 items-center p-6 bg-[#f7f7f7] border-2 rounded-4xl border-[#555555] lg:w-full md:w-[80%] justify-self-center">
            <div className={aboutStyle}>
                <h1>About</h1>
                <h1>Built With: HTML, CSS, JS</h1>
                <h1>Start Date: 2025-03-28</h1>
                <h1>End Date: 2025-03-28</h1>
            </div>

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
            <div
                className="absolute right-5 bottom-5 hover:cursor-pointer"
                onClick={() => {
                    isAboutActive
                        ? setIsAboutActive(false)
                        : setIsAboutActive(true);
                }}
            >
                <IoInformationCircleOutline size="2rem" />
            </div>
        </div>
    );
};

export default ProjectCard;
