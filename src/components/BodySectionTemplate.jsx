import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const BodySectionTemplate = ({
    children,
    subTitle,
    title,
    id,
    nextSection,
}) => {
    return (
        <section
            id={id}
            className="relative flex flex-col items-center w-full md:h-[96vh] h-fit min-h-fit box-border pt-[4vh] xl:px-[10rem] lg:px-[7rem] md:px-[5rem] px-[2rem]"
        >
            <h1 className="text-center sm:text-[1rem] text-[0.8rem] pb-4 text-[#555555]">
                {subTitle}
            </h1>
            <h1 className="text-center sm:text-5xl text-4xl font-bold">
                {title}
            </h1>
            <div className="flex flex-1 justify-center items-center w-full h-full min-h-fit">
                {children}
            </div>
            <div className="absolute xl:block hidden right-[5rem] bottom-[2.5rem] hover:cursor-pointer">
                <a href={"#" + nextSection}>
                    <MdOutlineKeyboardDoubleArrowDown size="3rem" />
                </a>
            </div>
        </section>
    );
};

export default BodySectionTemplate;
