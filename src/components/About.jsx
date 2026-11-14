import React from "react";
import BodySectionTemplate from "./BodySectionTemplate";
import AboutImage from "../assets/about-pic3.jpg";
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
                                2+ years - <b>Full Stack Development</b>
                            </h1>
                            <h1 className="text-[#555555]">
                                3+ years - <b>Game Development</b>
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
                        <h1 className="text-[#555555] xl:text-left">
                            Hi, I’m Tarif Mohammad, a full stack developer with
                            an Advanced Diploma in Game Programming from George
                            Brown College. I started out building games, but web
                            development is where I found my passion because an
                            idea can become a live, working product that anyone
                            can reach from a phone or a computer.
                            <br />
                            <br />
                            For the past two years I’ve been building and
                            launching web apps from scratch, and I’ve loved
                            every part of it, from the first idea to seeing it
                            live for real people to use. I care a lot about
                            making things that work well, so I test my projects
                            carefully, write test plans, and track down bugs
                            before anyone else has to run into them. I enjoy
                            both sides of the process, building software and
                            making it better, which is why I’m drawn to full
                            stack, backend, and QA roles.
                            <br />
                            <br />
                            I’m looking for a team where I can contribute from
                            day one, keep sharpening my technical skills, and
                            help ship software that works.
                        </h1>
                    </div>
                </div>
            </div>
        </BodySectionTemplate>
    );
};

export default About;
