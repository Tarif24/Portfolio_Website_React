import React from "react";

const ExperienceItemsContainer = ({children, title}) => {
    return (
        <div className="border-1 border-[#555555] p-8 min-w-[30vw] flex-1 flex flex-col items-center rounded-4xl">
            <h1 className="font-bold text-[1.75rem] text-[#555555] mb-8">
                {title}
            </h1>
            <div className="flex flex-wrap w-full justify-between gap-10">
                {children}
            </div>
        </div>
    );
};

export default ExperienceItemsContainer;
