import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import GitHubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";
import Resume from "../assets/Tarif_Mohammad_Resume.pdf";

const Profile = () => {
    const logoClass =
        "h-8 self-center hover:cursor-pointer transition duration-300 ease-in-out hover:scale-135";

    const onDownloadCVClicked = () => {
        window.open(Resume);
    };

    const onGitHubClicked = () => {
        window.open("https://github.com/Tarif24");
    };

    const onLinkedinClicked = () => {
        window.open("https://www.linkedin.com/in/tarif-mohammad-224a9316avgf");
    };

    const onContactClicked = () => {
        location.href = "#contact";
    };

    return (
        <div className="xl:h-[80vh] xl:pt-[4vh] xl:pb-0 pt-16 pb-20 flex xl:flex-row flex-col justify-center items-center xl:gap-20 gap-12">
            <div>
                <img
                    className="xl:size-100 sm:size-75 size-60 rounded-[13rem]"
                    src={profilePic}
                    alt="Profile Picture"
                />
            </div>
            <div className="text-center self-center space-y-[1rem]">
                <h1 className="text-[#555555] font-bold">Hello, I am</h1>
                <h1 className="sm:text-5xl text-3xl font-bold">
                    Tarif Mohammad
                </h1>
                <h1 className="text-[#555555] font-bold sm:text-[1.75rem] text-[1.3rem]">
                    Frontend Developer
                </h1>
                <div className="flex justify-center items-center gap-4">
                    <button
                        className="text-center border-[0.1rem] rounded-4xl border-[#555555] p-4 font-bold w-[8rem] text-[0.8rem] hover:text-white hover:bg-[#353535] hover:cursor-pointer transition duration-300 ease-in-out"
                        onClick={onDownloadCVClicked}
                    >
                        Download CV
                    </button>
                    <button
                        className="text-white bg-[#353535] text-center border-[0.1rem] rounded-4xl border-[#555555] p-4 font-bold w-[8rem] text-[0.8rem] hover:bg-black hover:cursor-pointer transition duration-300 ease-in-out"
                        onClick={onContactClicked}
                    >
                        Contact Info
                    </button>
                </div>
                <div className="flex justify-center items-center gap-4 w-full">
                    <img
                        className={logoClass}
                        src={GitHubLogo}
                        alt="GitHub Logo"
                        onClick={onGitHubClicked}
                    />
                    <img
                        className={logoClass}
                        src={LinkedinLogo}
                        alt="Linkedin Logo"
                        onClick={onLinkedinClicked}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
