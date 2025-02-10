import React from "react";
import NavBar from "./NavBar";

const Footer = () => {
    const linkClass =
        "hover:text-[#555555] decoration-[#8b8b8b] hover:underline underline-offset-[1rem] hover:cursor-pointer transition duration-300 ease-in-out";

    return (
        <div className="flex flex-col justify-center items-center gap-16 h-[26vh]">
            <div className="flex gap-8 text-2xl">
                <a className={linkClass}>About</a>
                <a className={linkClass}>Experience</a>
                <a className={linkClass}>Projects</a>
            </div>
            <h1 className="text-[#555555] pb-4">
                Copyright &#169; 2024 Tarif Mohammad. All Rights Reserved
            </h1>
        </div>
    );
};

export default Footer;
