import React from "react";

const NavBar = () => {
    const linkClass =
        "hover:text-[#555555] decoration-[#8b8b8b] hover:underline underline-offset-[1rem] hover:cursor-pointer transition duration-300 ease-in-out";

    return (
        <nav
            id="home"
            className="p-4 flex h-[17vh] items-center justify-around hidden"
        >
            <div className="text-3xl hover:cursor-default">
                <h1>Tarif Mohammad</h1>
            </div>
            <div className="flex gap-8 text-2xl">
                <a href="#about" className={linkClass}>
                    About
                </a>
                <a href="#experience" className={linkClass}>
                    Experience
                </a>
                <a href="#projects" className={linkClass}>
                    Projects
                </a>
                <a href="#contact" className={linkClass}>
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
