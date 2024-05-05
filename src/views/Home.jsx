import React from "react";
import Navbar from "../components/Navbar";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import twitterIcon from "../assets/twitter-icon.png";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-row justify-center items-center px-[60px] py-[150px] ">
                <div className="w-[700px] text-[#31363F] text-center space-y-5">
                    <h1 className="font-bold text-[30px]">Welcome to My Portfolio</h1>
                    <p className="font-light text-[20px] leading-relaxed">
                        My name is Raihan, I am a Software Engineer with a strong dedication to web development, UI/UX design, and Android app development. With a solid background and a passion for innovation, I strive to create engaging and impactful technology solutions. Welcome to my journey in the world of technology.
                    </p>
                </div>
            </div>
        </>
    )
}

const AboutSection = () => {
    return (
        <>
            <div className="flex flex-row justify-around items-center px-[60px] py-[100px] ">
                <img src={image2} alt="image 2" className="w-[350px] h-[350px]"/>
                <div className="w-[600px] text-[#31363F] space-y-5">
                    <h1 className="font-bold text-[30px]">About Me</h1>
                    <p className="font-light text-[20px] leading-relaxed">
                        Hello! I'm Raihan Maulana, a dedicated Software Engineer specializing in web development, UI/UX design, and Android app development. With a passion for innovation and a commitment to delivering exceptional user experiences, I'm here to bring your ideas to life. Let's build something amazing together!
                    </p>
                    <div>
                        
                    </div>
                    <button className="bg-[#5BBCFF] px-4 py-2 rounded-[30px] text-white text-center">
                        Learn More About Me
                    </button>
                </div>
            </div>
        </>
    )
}

const PortfolioSection = () => {
    return (
        <>
            <div className="flex flex-col px-[30px] py-[150px] items-center space-y-5">
                <div className="text-[#31363F] space-y-5 text-center w-[850px]">
                    <h1 className="font-bold text-[24px]">
                        Portfolio
                    </h1>
                    <p className="font-light text-[16px]">Welcome to my portfolio! Here you'll find a curated selection of projects that showcase my skills and expertise in web development, UI/UX design, and Android app development. Each project represents a unique challenge and an opportunity for innovation.</p>
                </div>
                <button className="bg-[#5BBCFF] px-4 py-2 rounded-[30px] text-white text-center">
                    View All
                </button>
            </div>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <footer className="bg-[#5BBCFF] flex flex-row justify-between items-center py-[50px] px-[30px]">
                <p>&copy; 2024 Raihan Maulana. All rights reserved.</p>
                <div>
                    <ul className="flex flex-row space-x-5 items-center">
                        <li>
                            <img src={linkedinIcon} alt="" className="w-[30px]"/>
                        </li>
                        <li>
                            <img src={twitterIcon} alt="" className="w-[30px]"/>
                        </li>
                        <li>
                            <img src={githubIcon} alt="" className="w-[30px]"/>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <PortfolioSection />
            <Footer />
        </>
    )
}

export default Home