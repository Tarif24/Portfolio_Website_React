import React from "react";
import EmailIcon from "../assets/email.png"
import LinkedinIcon from "../assets/linkedin.png"

const Contact = () => {
    const onEmailClicked = () => {
        
    }

    const onLinkedinClicked = () => {
        window.open('https://www.linkedin.com/in/tarif-mohammad-224a9316avgf');
    }
    
    return (
        <section className="flex flex-col items-center justify-center w-full h-[70vh] box-border pt-[4vh] px-[10rem] gap-4">
            <h1 className="text-center text-1xl text-[#555555]">
                Get In Touch
            </h1>
            <h1 className="text-center text-5xl font-bold">Contact Me</h1>
            <div className="flex gap-8 border-1 rounded-4xl border-[#8b8b8b] p-6 mt-8 bg-[#fafafa]">
                <div className="flex gap-2 justify-center items-center" onClick={onEmailClicked}>
                    <img className="size-[2.5rem]" src={EmailIcon} alt="Email Icon" />
                    <a className="hover:text-[#555555] decoration-[#8b8b8b]  hover:underline underline-offset-[1rem] hover:cursor-pointer transition duration-300 ease-in-out text-[1.25rem]">Tarif24@hotmail.com</a>
                </div>
                <div className="flex gap-2 justify-center items-center" onClick={onLinkedinClicked}>
                    <img className="size-[2rem]" src={LinkedinIcon} alt="Linkedin Icon" />
                    <a className="hover:text-[#555555] decoration-[#8b8b8b] hover:underline underline-offset-[1rem] hover:cursor-pointer transition duration-300 ease-in-out text-[1.25rem]">Linkedin</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
