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
                <ExperienceItemsContainer title="Web Development">
                    <ExperienceItem skill="React" skillLevel={2} />
                    <ExperienceItem skill="Tailwind" skillLevel={3} />
                    <ExperienceItem skill="JavaScript" skillLevel={2} />
                    <ExperienceItem skill="Node.js" skillLevel={2} />
                    <ExperienceItem skill="Express.js" skillLevel={2} />
                    <ExperienceItem skill="MongoDB" skillLevel={2} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="Project Management/Deployment">
                    <ExperienceItem skill="Docker" skillLevel={2} />
                    <ExperienceItem skill="Trello" skillLevel={1} />
                    <ExperienceItem skill="Render" skillLevel={2} />
                    <ExperienceItem skill="Vercel" skillLevel={1} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="Source Control">
                    <ExperienceItem skill="GitHub" skillLevel={2} />
                    <ExperienceItem skill="Perforce" skillLevel={2} />
                    <ExperienceItem skill="SourceTree" skillLevel={1} />
                    <ExperienceItem skill="GitLab" skillLevel={1} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="Soft Skills">
                    <ExperienceItem skill="Time Management" skillLevel={0} />
                    <ExperienceItem skill="Colabaration" skillLevel={0} />
                    <ExperienceItem skill="Communication" skillLevel={0} />
                    <ExperienceItem skill="Problem Solving" skillLevel={0} />
                </ExperienceItemsContainer>
            </div>
        </BodySectionTemplate>
    );
};

export default Experience;
