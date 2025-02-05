import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import GitHubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";
import Resume from "../assets/Tarif Mohammad Resume.pdf"

const Profile = () => {
    const logoClass =
        "h-8 self-center hover:cursor-pointer transition duration-300 ease-in-out hover:scale-135";

    const onDownloadCVClicked = () => {
        window.open(Resume);
    }

    const onGitHubClicked = () => {
        window.open('https://github.com/Tarif24');
    }

    const onLinkedinClicked = () => {
        window.open('https://www.linkedin.com/in/tarif-mohammad-224a9316avgf');
    }

    return (
        <div className="h-[80vh] pt-[4vh] flex justify-center items-center gap-20">
            <div>
                <img
                    className="size-100 rounded-[13rem]"
                    src={profilePic}
                    alt="Profile Picture"
                />
            </div>
            <div className="text-center self-center space-y-[1rem]">
                <h1 className="text-[#555555] font-bold">Hello, I am</h1>
                <h1 className="text-5xl font-bold">Tarif Mohammad</h1>
                <h1 className="text-[#555555] font-bold text-[1.75rem]">
                    Frontend Developer
                </h1>
                <div className="flex justify-center items-center gap-4">
                    <button className="text-center border-[0.1rem] rounded-4xl border-[#555555] p-4 font-bold w-[8rem] text-[0.8rem] hover:text-white hover:bg-[#555555] hover:cursor-pointer transition duration-300 ease-in-out" onClick = {onDownloadCVClicked}>
                        Download CV
                    </button>
                    <button className="text-white bg-[#555555] text-center border-[0.1rem] rounded-4xl border-[#555555] p-4 font-bold w-[8rem] text-[0.8rem] hover:bg-black hover:cursor-pointer transition duration-300 ease-in-out">
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
