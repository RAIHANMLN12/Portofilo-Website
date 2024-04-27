import React from "react";
import Navbar from "../components/Navbar";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center px-[30px] py-[60px] bg-[#FFFBF5]">
                <div className="w-[600px] text-[#31363F] space-y-5">
                    <h1 className="font-bold text-[24px]">Welcome to My Portfolio</h1>
                    <p className="font-light text-[16px]">
                    My name is Raihan, I am a Software Engineer with a strong dedication to web development, UI/UX design, and Android app development. With a solid background and a passion for innovation, I strive to create engaging and impactful technology solutions. Welcome to my journey in the world of technology.
                    </p>
                </div>
                <img src={image1} alt="image 1" className="w-[350px] h-[350px]"/>
            </div>
        </>
    )
}

const AboutSection = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center px-[30px] py-[60px] bg-[#F7EFE5]">
                <img src={image2} alt="image 2" className="w-[350px] h-[350px]"/>
                <div className="w-[600px] text-[#31363F] space-y-5">
                    <h1 className="font-bold text-[24px]">About Me</h1>
                    <p className="font-light text-[16px]">
                        Hello! I'm Raihan Maulana, a dedicated Software Engineer specializing in web development, UI/UX design, and Android app development. With a passion for innovation and a commitment to delivering exceptional user experiences, I'm here to bring your ideas to life. Let's build something amazing together!
                    </p>
                    <button className="bg-[#5BBCFF] px-4 py-2 rounded-[30px] text-white text-center">
                        Learn More About Me
                    </button>
                </div>
            </div>
        </>
    )
}

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
        </>
    )
}

export default Home