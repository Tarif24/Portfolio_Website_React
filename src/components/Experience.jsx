import React from "react";
import BodySectionTemplate from "./BodySectionTemplate";
import ExperienceItem from "./ExperienceItem";
import ExperienceItemsContainer from "./ExperienceItemsContainer";

const Experience = () => {
    return (
        <BodySectionTemplate
            subTitle="Explore My"
            title="Experience"
            id="experience"
            nextSection="projects"
        >
            <div className="flex flex-1 gap-8 flex-wrap md:flex-row flex-col justify-between md:items-stretch items-center my-16 w-full">
                <ExperienceItemsContainer title="Frontend Web Development">
                    <ExperienceItem skill="React" years={2} />
                    <ExperienceItem skill="Tailwind" years={2} />
                    <ExperienceItem skill="JavaScript" years={2} />
                    <ExperienceItem skill="TypeScript" years={1} />
                    <ExperienceItem skill="NextJS" years={2} />
                    <ExperienceItem skill="CSS3" years={2} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="Backend Web Development">
                    <ExperienceItem skill="NodeJS" years={2} />
                    <ExperienceItem skill="ExpressJS" years={2} />
                    <ExperienceItem skill="MongoDB" years={1} />
                    <ExperienceItem skill="Socket.io" years={1} />
                    <ExperienceItem skill="REST API" years={1} />
                    <ExperienceItem skill="ZOD" years={1} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="DevOps">
                    <ExperienceItem skill="AWS" years={1} />
                    <ExperienceItem skill="Docker" years={1} />
                    <ExperienceItem skill="Jest" years={1} />
                    <ExperienceItem skill="GitHub Actions" years={1} />
                    <ExperienceItem skill="Playwright" years={1} />
                    <ExperienceItem skill="CICD" years={1} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="Project Management">
                    <ExperienceItem skill="Trello" years={1} />
                    <ExperienceItem skill="Miro" years={1} />
                    <ExperienceItem skill="DrawIO" years={1} />
                    <ExperienceItem skill="Winston Logging" years={1} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="Source Control">
                    <ExperienceItem skill="GitHub" years={3} />
                    <ExperienceItem skill="Perforce" years={2} />
                    <ExperienceItem skill="SourceTree" years={2} />
                    <ExperienceItem skill="GitLab" years={1} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="Soft Skills">
                    <ExperienceItem skill="Time Management" years={0} />
                    <ExperienceItem skill="Collaboration" years={0} />
                    <ExperienceItem skill="Communication" years={0} />
                    <ExperienceItem skill="Problem Solving" years={0} />
                </ExperienceItemsContainer>
            </div>
        </BodySectionTemplate>
    );
};

export default Experience;
