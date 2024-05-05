import React from "react";
import Navbar from "../components/Navbar";
import KotlinIcon from "../assets/kotlin-icon.png";
import ReactIcon from "../assets/react-icon.png";
import JavascriptIcon from "../assets/javascript-icon.png";
import TailwindIcon from "../assets/tailwind-icon.png";
import FigmaIcon from "../assets/figma-icon.png";
import AndroidIcon from "../assets/android-icon.png"


const SkillIndicator = ({ skillName, proficiency, image}) => {
    const indicatorColor = proficiency > 75 ? "#4CAF50" : proficiency > 50 ? "#FFC107" : "#F44336";
    const indicatorWidth = `${proficiency}%`;

    return (
        <div className="flex flex-col space-y-5">
            <div className="flex flex-row space-x-5 items-center">
                <img src={image} alt="" className="w-[50px]"/>
                <h3 className="text-lg font-semibold mb-2">{skillName}</h3>
            </div>
            <div className="h-4 w-[450px] bg-gray-200 rounded-full">
                <div className="h-full rounded-full" style={{ width: indicatorWidth, backgroundColor: indicatorColor }}></div>
            </div>
        </div>
    );
}

const AboutPage = () => {
    return(
        <>
            <div className="flex flex-col">
                <Navbar />
                <div className="flex flex-row justify-center items-center px-[60px] py-[100px] ">
                    <div className="w-[800px] text-[#31363F] text-center space-y-5">
                        <h1 className="font-bold text-[35px]">About Me</h1>
                        <p className="font-light text-[20px] leading-relaxed">
                        Hello there! I'm Raihan Maulana, a passionate Software Engineer with a knack for crafting engaging digital experiences. From designing intuitive user interfaces to architecting robust web solutions, I thrive on turning ideas into reality through code.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-start px-[60px]">
                    <div className="text-[#31363F] space-y-5">
                        <h1 className="font-bold text-[30px]">My Journey</h1>
                        <p className="font-light text-[20px] leading-relaxed">
                        My journey into the tech world began during my college days, where I pursued a degree in Computer Science Degree from Universitas Negeri Medan. Since then, I've been on a continuous quest for knowledge and growth, exploring various facets of software development and design. What excites me most about being a Software Engineer is the ability to blend creativity with technology to solve real-world problems. Whether it's building a sleek website, designing an immersive app interface, or optimizing code for performance, each project presents a new challenge and an opportunity to innovate.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start px-[60px] py-[100px]">
                    <div className=" text-[#31363F] text-start space-y-5">
                        <h1 className="font-bold text-[30px]">My Skills</h1>
                        <p className="font-light text-[20px] leading-relaxed">
                        As a versatile Software Engineer, I possess expertise in a wide range of technologies, including:
                        </p>
                        <SkillIndicator skillName="Javascript" proficiency={95} image={JavascriptIcon}/>
                        <SkillIndicator skillName="Kotlin" proficiency={80} image={KotlinIcon}/>
                        <SkillIndicator skillName="Figma" proficiency={60} image={FigmaIcon}/>
                        <SkillIndicator skillName="React.JS" proficiency={80} image={ReactIcon}/>
                        <SkillIndicator skillName="Jetpack Compose" proficiency={75} image={AndroidIcon}/>
                        <SkillIndicator skillName="Tailwind" proficiency={85} image={TailwindIcon}/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AboutPage