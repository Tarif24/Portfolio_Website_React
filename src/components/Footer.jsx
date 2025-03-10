import React from "react";
import NavBar from "./NavBar";

const Footer = () => {
    const linkClass =
        "hover:text-[#555555] decoration-[#8b8b8b] hover:underline underline-offset-[1rem] hover:cursor-pointer transition duration-300 ease-in-out";

    return (
        <div className="flex flex-col justify-center items-center gap-16 sm:h-[26vh] h-fit pt-8">
            <span className="border-1 w-[90%] border-[#8b8b8b]"></span>
            <div className="flex sm:flex-row flex-col gap-8 text-2xl text-center">
                <a href="#home" className={linkClass}>
                    Home
                </a>
                <a href="#about" className={linkClass}>
                    About
                </a>
                <a href="#experience" className={linkClass}>
                    Experience
                </a>
                <a href="#projects" className={linkClass}>
                    Projects
                </a>
            </div>
            <h1 className="text-[#555555] pb-16 sm:text[1rem] text-[0.75rem] text-center">
                Copyright &#169; 2025 Tarif Mohammad. All Rights Reserved
            </h1>
        </div>
    );
};

export default Footer;
