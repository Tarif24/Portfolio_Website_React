import React from "react";
import BodySectionTemplate from "./BodySectionTemplate";
import ExperienceItem from "./ExperienceItem";
import ExperienceItemsContainer from "./ExperienceItemsContainer";

const Experience = () => {
    return (
        <BodySectionTemplate subTitle="Explore My" title="Experience">
            <div className="flex flex-1 gap-8 flex-wrap justify-between">
                <ExperienceItemsContainer title="Frontend Development">
                    <ExperienceItem skill="HTML" skillLevel={3} />
                    <ExperienceItem skill="CSS" skillLevel={3} />
                    <ExperienceItem skill="JavaScript" skillLevel={2} />
                    <ExperienceItem skill="React" skillLevel={1} />
                    <ExperienceItem skill="Tailwind" skillLevel={2} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="Game Development">
                    <ExperienceItem skill="Unreal Engine" skillLevel={2} />
                    <ExperienceItem skill="Unity" skillLevel={3} />
                    <ExperienceItem skill="C++" skillLevel={3} />
                    <ExperienceItem skill="C#" skillLevel={2} />
                </ExperienceItemsContainer>

                <ExperienceItemsContainer title="Source Control">
                    <ExperienceItem skill="GitHub" skillLevel={2} />
                    <ExperienceItem skill="Perforce" skillLevel={2} />
                    <ExperienceItem skill="SourceTree" skillLevel={1} />
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
