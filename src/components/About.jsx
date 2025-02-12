import React from "react";
import BodySectionTemplate from "./BodySectionTemplate";
import AboutImage from "../assets/about-pic1.jpg";
import ExperienceIcon from "../assets/experience.png";
import EducationIcon from "../assets/education.png";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
    return (
        <BodySectionTemplate subTitle="Get To Know More" title="About Me" id="about" nextSection="experience">
            <div className="flex justify-between">
                <div className="size-[400px] size-min-[400px]">
                    <img
                        className="rounded-4xl"
                        src={AboutImage}
                        alt="About Image"
                    />
                </div>
                <div className="flex flex-col w-[70%] justify-center gap-8">
                    <div className="flex w-full justify-between gap-[2rem]">
                        <div className="flex flex-col border-1 border-[#555555] justify-center items-center flex-1 rounded-4xl p-[1.5rem]">
                            <img className="size-[2rem] mb-4" src={ExperienceIcon} alt="Experience Icon" />
                            <h1 className="font-bold">Experience</h1>
                            <h1 className="text-[#555555]">
                                1+ years - <b>Frontend Develoment</b>
                            </h1>
                            <h1 className="text-[#555555]">
                                3+ years - <b>Game Develoment</b>
                            </h1>
                        </div>
                        <div className="flex flex-col border-1 border-[#555555] justify-center items-center flex-1 rounded-4xl p-[1.5rem]">
                            <div className="mb-4">
                                <FaGraduationCap size="2rem"/>
                            </div>
                            <h1 className="font-bold">Education</h1>
                            <h1 className="text-[#555555]">Ontario College Advanced Diploma</h1>
                            <h1 className="text-[#555555]">in <b>Game Programming</b></h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[#555555]">
                            Hello, My name is Tarif Mohammad and I graduated
                            from George Brown College for Game Programming. My
                            journey began as a game developer but now my passion
                            has moved towards web development. I love the vast
                            freedom and possibilities that programming provides
                            and how web development can transform these ideas
                            into engaging online experiences, I would like to
                            obtain a position where my experience, eagerness,
                            and proficiency to learn will allow me the
                            opportunity to gain valuable knowledge in
                            Programming and the world of development.
                        </h1>
                    </div>
                </div>
            </div>
        </BodySectionTemplate>
    );
};

export default About;
