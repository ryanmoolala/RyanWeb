import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import Indiv from './Images/indiv.JPG';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="flex flex-col w-1/2 text-white space-x-10 border-0 border-white w-fit md:flex-col pr-20 items-center lg:flex-row ">
                <div className="flex flex-shrink-0 mt-6">
                    <img alt="profile" className="w-64 h-64 object-cover rounded-full border-2 border-white" src={Indiv} />
                </div>

                <div className="mt-5 w-96 space-y-10">
                    <h1 className="font-roboto-slab font-bold text-6xl mb-3">Ryan</h1>
                    <div className="flex flex-row items-start w-fit md:">
                        <div className="font-roboto-mono" id="about">Y1 Computer Science @ NUS</div>
                    </div>
                    <div className="mt-7 overflow-auto ">I am a first-year CS student @ NUS. My interests lie in Networking, Cloud & Parallel computing. I also see myself venturing into other revolutionary technologies such as A.I.</div>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center border-0 border-red-500 w-1/2 mt-28">
                <div>
                    <h1 className="text-white font-roboto-mono text-lg" id="connect">.connect()</h1>
                </div>
                <div className="text-white flex flex-row space-y-0 mt-7 space-x-3">
                    <a href="https://www.linkedin.com/in/ryan-tan-857558270/" className="transform transition-transform duration-300 hover:scale-125 cursor-pointer" target="_blank">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://github.com/ryanmoolala" className="transform transition-transform duration-300 hover:scale-125 cursor-pointer" target="_blank">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://mail.google.com/mail/u/1/#inbox" className="transform transition-transform duration-300 hover:scale-125 cursor-pointer" target="_blank">
                        <CgMail size={32} />
                    </a>
                    <a href="https://www.instagram.com/ryan.tjy/?hl=en" className="transform transition-transform duration-300 hover:scale-125 cursor-pointer" target="_blank">
                        <FaInstagram size={32} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
