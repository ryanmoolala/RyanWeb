import React, { useState } from "react";


import { FaPython, FaJava, FaCss3, FaDocker, FaReact, FaSquareGit, FaRust, FaAws   } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript, SiTailwindcss, SiFlask, SiSpringboot, SiMysql, SiSqlite, SiOpencv     } from "react-icons/si";
import { TbFileTypeHtml, TbBrandNodejs  } from "react-icons/tb";

import Weather from "./Images/weather.jpg";
import DJLite from "./Images/DJLite.png";
import Website from "./Images/Website.png";
import Orbital from "./Images/Orbital.png";
import PriceTrack from "./Images/PriceTrack.png";
import footballvision from "./Images/footballvision.jpg";
import shower from "./Images/shower.png"
import footballvideo from "./Videos/output_video.mp4";

import { FaLinkedin, FaGithub, FaInstagram   } from "react-icons/fa6";

import { CgMail } from "react-icons/cg";





const Skills = () => {

    const [showVideo, isShowVideo] = useState(false);

    const showPopup = () => {
        isShowVideo(!showVideo);
    }

    return (
        <div class="flex flex-col items-center justify-center mt-20 pb-20">
            <div className="flex flex-col items-center justify-center w-full px-4 md:w-4/5 lg:w-3/4">


            <div className="text-white font-roboto-mono text-lg" id="connect">What I know</div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10">

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <FaPython class="mt-2" size={44}/>
                    <h1 class="mt-2">Python</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <RiJavascriptFill class="mt-2" size={44}/>
                    <h1 class="mt-2">JavaScript</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <FaJava  class="mt-2" size={44}/>
                    <h1 class="mt-2">Java</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <SiTypescript class="mt-2" size={44}/>
                    <h1 class="mt-2">TypeScript</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <FaDocker  class="mt-2" size={44}/>
                    <h1 class="mt-2">Docker</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <FaReact class="mt-2" size={44}/>
                    <h1 class="mt-2">React JS</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <SiFlask  class="mt-2" size={44}/>
                    <h1 class="mt-2">Flask Py.</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <SiSpringboot   class="mt-2" size={44}/>
                    <h1 class="mt-2">Spring</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <SiMysql   class="mt-2" size={44}/>
                    <h1 class="mt-2">MySQL</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <TbBrandNodejs   class="mt-2" size={44}/>
                    <h1 class="mt-2">NodeJS</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <SiSqlite   class="mt-2" size={44}/>
                    <h1 class="mt-2">SQLite</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <SiOpencv   class="mt-2" size={44}/>
                    <h1 class="mt-2">OpenCV</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <FaRust   class="mt-2" size={44}/>
                    <h1 class="mt-2">Rust</h1>
                </div>
                

            </div>

        </div>

        <div class="text-white font-roboto-mono text-lg mt-32" id="connect">Technologies</div>

        <div class="text-white font-roboto-mono text-lg mt-6 flex flex-col text-center md:flex-row gap-x-6">
            <div>REST APIs</div>
            <div>Web Sockets</div>
            <div>Web Scraping</div>
            <div>SQL Databases</div>
            <div>MVC</div>
            <div>Computer Vision</div>
        </div>

        <div class="text-white font-roboto-mono text-lg mt-6">Currently learning AWS.</div>


        <div class="text-white font-roboto-mono text-lg mt-32" id="connect">Projects[]</div>
          
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 border-0 mt-5 border-red-500 gap-x-4 gap-y-4">

                <a class="flex flex-col relative cursur-pointer border-2 border-white rounded-sm min-w-fit" href="https://github.com/ryanmoolala/Weather" target="_blank">
                    <div>
                        <div class="text-white z-1 flex flex-row absolute space-x-2 mx-2">
                                <TbFileTypeHtml size={32}></TbFileTypeHtml>
                                <FaCss3 size={32}/>
                                <RiJavascriptFill size={32}/>
                        </div>
                        <img src={Weather}></img>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-16">Weather web-app that displays the current weather conditions anywhere</h1>
                    </div>
            
                </a>

                <a class="cursur-pointer border-2 border-white rounded-sm" href="https://github.com/ryanmoolala/RyanBlog" target="_blank">
                    <div>
                    <div class="text-white z-1 flex flex-row absolute space-x-2 mx-2">
                                <FaReact size={32}/>
                                <SiTailwindcss size={32}/>
                        </div>
                        <img src={Website}></img>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5 text-center">My website</h1>
                    </div>
                </a>

                <a class="cursur-pointer border-2 border-white rounded-sm" href="https://github.com/ryanmoolala/DJ-Lite" target="_blank">
                    <div>
                    <div class="text-black z-1 flex flex-row absolute space-x-2 mx-2">
                                <FaReact size={32}/>
                                <SiTailwindcss size={32}/>
                                <SiSpringboot size={32}/>
                                <FaJava size={32}/>
                        </div>
                        <img src={DJLite}></img>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5">Spotify web-app that tracks real time Spotify data ,revealing the user's favourite songs, artists and genres!</h1>
                    </div>
                    
                </a>

                <a class="cursur-pointer border-2 border-white rounded-sm" href="https://reflectiveminds.vercel.app/" target="_blank">
                    <div>
                        <img src={Orbital}></img>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5">NUS Orbital ; ReflectiveMinds ; Apollo. A web-app that allows you to do journaling.</h1>
                    </div>
                </a>

                <div class="space-y-6">

                <div class="cursur-pointer h-fit border-2 border-white rounded-sm"  target="_blank">
                    <div>
                    <div class="text-white z-1 flex flex-row absolute space-x-2 mx-2">
                                <FaReact size={32}/>
                                <SiTailwindcss size={32}/>
                                <SiTypescript size={32}/>
                                <TbBrandNodejs size={32}/>
                        </div>
                        <a href="https://github.com/ryanmoolala/PriceTrack">
                           <img src={PriceTrack}></img>
                        </a>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5">Mini app that fetches real-time data of stock prices via websockets, and related information about the company using web scraping.</h1>
                    </div>
                </div>
                

                <div class="cursur-pointer h-fit border-2 border-white rounded-sm" onClick={e => showPopup(e)} target="_blank">
                    <div>
                    <div class="text-black z-1 flex flex-row absolute space-x-2 mx-2">
                        </div>
                        <img src={footballvision}></img>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5">OpenCV & YOLOV8 project that analyses football matches, providing numerical statistics. (In Progress) <a href="https://github.com/ryanmoolala/FootballVision">Find out more.</a></h1>
                    </div>
                </div>

                {showVideo && (
                    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={showPopup}>
                        <div className="bg-black p-2 rounded-lg shadow-lg relative w-3/4 max-w-2xl" onClick={(e) => e.stopPropagation()}>
                            <video controls autoPlay className="w-full h-auto" src={footballvideo} type="video/mp4">
                            </video>
                        </div>
                    </div>
                )}

                
                </div>

                <div class="cursur-pointer h-fit border-2 border-white rounded-sm" target="_blank">
                    <div>
                    <div class="text-black z-1 flex flex-row absolute space-x-2 mx-2"></div>
                        <a href="https://github.com/ryanmoolala/shower-reminder">
                        <img src={shower}></img>
                        </a>
                    </div>
                    
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5">NUS Hack & Roll project; reminding students to take their daily shower!</h1>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center border-0 border-red-500 w-1/2 mt-28">
                
                <div class="text-white flex flex-row space-x-10 mt-7" >

                    <a href="https://www.linkedin.com/in/ryan-tan-857558270/" class="transform transition-transform duration-300 hover:scale-125 cursor-default" target="_blank">
                        <FaLinkedin size={32}/>
                    </a>
                    <a href="https://github.com/ryanmoolala" class="transform transition-transform duration-300 hover:scale-125 cursor-default" target="_blank">
                        <FaGithub size={32}/>
                    </a>
                    <a href="https://mail.google.com/mail/u/1/#inbox" class="transform transition-transform duration-300 hover:scale-125 cursor-default" target="_blank">
                        <CgMail size={32}/>
                    </a>
                    <a href="https://www.instagram.com/ryan.tjy/?hl=en" class="transform transition-transform duration-300 hover:scale-125 cursor-default" target="_blank">
                        <FaInstagram size={32}/>
                    </a>
                    
                    
                </div>

            </div>
        </div>
    )
}

export default Skills;