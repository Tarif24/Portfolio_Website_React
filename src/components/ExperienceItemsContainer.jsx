import React from "react";

const ExperienceItemsContainer = ({ children, title }) => {
    return (
        <div className="border-1 border-[#555555] p-8 min-w-[30vw] flex-1 flex flex-col items-center rounded-4xl md:w-full sm:w-[70%] w-full">
            <h1 className="font-bold lg:text-[1.75rem] md:text-[1.4rem] sm:text-[1.8rem] text-[1.3rem] text-[#555555] mb-8 text-center">
                {title}
            </h1>
            <div className="flex">
                <div className="flex flex-wrap lg:flex-row flex-col items-left w-full justify-between lg:gap-10 md:gap-5 sm:gap-10 gap-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ExperienceItemsContainer;
