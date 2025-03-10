import React from "react";
import ExperienceIcon from "../assets/checkmark.png";

const ExperienceItem = ({ skill, skillLevel = 0 }) => {
    let level = "";

    switch (skillLevel) {
        case 0:
            level = "";
            break;
        case 1:
            level = "Basic";
            break;
        case 2:
            level = "Intermediate";
            break;
        case 3:
            level = "Advanced";
            break;
        default:
            level = "Basic";
    }

    return (
        <div className="flex gap-4  min-w-[10rem]">
            <img
                className="size-[2rem]"
                src={ExperienceIcon}
                alt="Experience Icon"
            />
            <div>
                <h1 className="font-bold lg:text-[1.1rem] md:text-[0.9rem] sm:text-[1.1rem] text-[0.9rem]">
                    {skill}
                </h1>
                <h1 className="text-[#555555] lg:text-[1rem] md:text-[0.8rem] sm:text-[1rem] text-[0.7rem]">
                    {level}
                </h1>
            </div>
        </div>
    );
};

export default ExperienceItem;
