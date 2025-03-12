import React from "react";
import BodySectionTemplate from "./BodySectionTemplate";
import AboutImage from "../assets/about-pic1.jpg";
import ExperienceIcon from "../assets/experience.png";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
    return (
        <BodySectionTemplate
            subTitle="Get To Know More"
            title="About Me"
            id="about"
            nextSection="experience"
        >
            <div className="flex justify-between items-center gap-16 my-16 lg:flex-row flex-col">
                <div className="flex items-center md:size-[400px] size-[80%] xl:min-h-[400px] xl:min-w-[400px]">
                    <img
                        className="rounded-4xl"
                        src={AboutImage}
                        alt="About Image"
                    />
                </div>
                <div className="flex flex-col lg:w-[70%] md:w-full justify-center gap-8">
                    <div className="flex w-full justify-between gap-[2rem] xl:flex-row lg:flex-col flex-col">
                        <div className="flex flex-col border-1 border-[#555555] justify-center items-center flex-1 rounded-4xl p-[1.5rem] text-center">
                            <img
                                className="size-[2rem] mb-4"
                                src={ExperienceIcon}
                                alt="Experience Icon"
                            />
                            <h1 className="font-bold">Experience</h1>
                            <h1 className="text-[#555555]">
                                1+ years - <b>Frontend Develoment</b>
                            </h1>
                            <h1 className="text-[#555555]">
                                3+ years - <b>Game Develoment</b>
                            </h1>
                        </div>
                        <div className="flex flex-col border-1 border-[#555555] justify-center items-center flex-1 rounded-4xl p-[1.5rem] text-center">
                            <div className="mb-4">
                                <FaGraduationCap size="2rem" />
                            </div>
                            <h1 className="font-bold">Education</h1>
                            <h1 className="text-[#555555]">
                                Ontario College Advanced Diploma
                            </h1>
                            <h1 className="text-[#555555]">
                                in <b>Game Programming</b>
                            </h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[#555555] xl:text-left lg:text-justify text-justify">
                            Hello, My name is Tarif Mohammad and I graduated
                            from George Brown College for Game Programming. My
                            journey began as a game developer but now my passion
                            has moved towards web development.
                            <br />
                            <br />I love the vast freedom and possibilities that
                            programming provides and how web development can
                            transform these ideas into interactable sites that I
                            can have up and running in seconds. I feel that with
                            websites others can reach my work fast and anywhere
                            they are weather it be on the computer or a phone.
                            This ease of uploading sites and ease of people
                            being able to see and interact with my work is why I
                            love Web Dev.
                            <br />
                            <br />I would like to obtain a position where my
                            experience, eagerness, and proficiency to learn will
                            allow me the opportunity to gain valuable knowledge
                            in Programming and the world of development.
                        </h1>
                    </div>
                </div>
            </div>
        </BodySectionTemplate>
    );
};

export default About;
