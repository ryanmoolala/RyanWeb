import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import Indiv from './Images/indiv.JPG';
import { SiLeetcode } from "react-icons/si";
import { getLeetcode } from "./Service.js";
import { useEffect } from "react";


const Home = () => {
    const [questions, setQuestion] = React.useState([]);
    const [stats, setStats] = React.useState([]);
    useEffect(() => {
        getLeetcode()
            .then((data) => {
                setStats(data.solved); // Set the questions
                setQuestion(data.submission); // Set the stats
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center mt-10 px-4">
            <div className="flex flex-col items-center justify-center text-white w-full max-w-4xl">
                <div className="flex flex-shrink-0 justify-center">
                    <img alt="profile" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-2 border-white" src={Indiv} />
                </div>

                <div className="mt-8 w-full max-w-sm space-y-6 text-center px-4">
                    <h1 className="font-roboto-slab font-bold text-4xl md:text-6xl">Ryan</h1>
                    <div className="flex justify-center">
                        <div className="font-roboto-mono" id="about">Computer Science @ NUS</div>
                    </div>
                    <div className="font-light">
                        I am a CS student @ NUS. My interests lie in Networking, Cloud & Parallel computing. I also see myself venturing into other revolutionary technologies such as A.I.
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center justify-center mt-32 px-10">
                <div>
                    <h1 className="text-white font-roboto-mono text-lg" id="connect">.activity()</h1>
                </div>

                <div className="flex flex-row justify-center gap-10 mt-10 leetcode-font text-white">
                    <div className="flex flex-col items-center">
                        <p>Past activity..</p>
                        <br></br>
                        <ul className="list-none text-center">
                            {questions == null || questions.length == 0 ? (<p>0 leetcode problems solved</p>) : (questions.map((question, index) => (
                                <li key={index}>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:underline"
                                    >
                                        {question} {/* Display question name in a readable format */}
                                    </a>
                                </li>
                            )))}
                        </ul>
                    </div>
    
                </div>
                <div className="flex flex-col items-center justify-center mt-5 w-full max-w-4xl space-y-6 text-center px-4 leetcode-font text-white">
                <ul className="list-none">
                
            </ul>
                    <a href="https://leetcode.com/submissions/#/1">More..</a>
                </div>
                
            </div>


            <div className="flex flex-col items-center w-full mt-16 md:mt-28 px-4">
                <div>
                    <h1 className="text-white font-roboto-mono text-lg" id="connect">.connect()</h1>
                </div>
                <div className="text-white flex flex-row flex-wrap justify-center gap-6 mt-7 mb-20">
                    <a href="https://www.linkedin.com/in/ryan-tan-857558270/" className="transform transition-transform duration-300 hover:scale-125 cursor-pointer" target="_blank">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://github.com/ryanmoolala" className="transform transition-transform duration-300 hover:scale-125 cursor-pointer" target="_blank">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox" className="transform transition-transform duration-300 hover:scale-125 cursor-pointer" target="_blank">
                        <CgMail size={28} />
                    </a>
                    <a href="https://www.instagram.com/ryan.tjy/?hl=en" className="transform transition-transform duration-300 hover:scale-125 cursor-pointer" target="_blank">
                        <FaInstagram size={28} />
                    </a>
                    <a href="https://leetcode.com/u/moolala/" className="transform transition-transform duration-300 hover:scale-125 cursor-pointer" target="_blank">
                        <SiLeetcode size={28} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
