import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center px-[60px] pt-[30px]">
                <div>
                    <h1 className="text-[24px] font-medium text-[#31363F]">
                        <Link to="/">Raihan Maulana</Link>
                    </h1>
                </div>
                <div className="flex flex-row items-center  space-x-7 text-[16px] font-light">
                    <ul className="flex flex-row space-x-5 text-[#31363F]">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                    <button className="bg-[#5BBCFF] px-4 py-2 rounded-[30px] text-white text-center">
                        Contact Me
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar