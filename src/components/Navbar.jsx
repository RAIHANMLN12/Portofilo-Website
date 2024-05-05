import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center px-[60px] pt-[30px]">
                <div>
                    <h1 className="text-[24px] font-medium text-[#31363F]">Raihan</h1>
                </div>
                <div className="flex flex-row items-center  space-x-7 text-[16px] font-light">
                    <ul className="flex flex-row space-x-5 text-[#31363F]">
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Portfolio
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