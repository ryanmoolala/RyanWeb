import React from "react";

import { FaPython, FaJava, FaCss3, FaDocker, FaReact, FaSquareGit } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript, SiTailwindcss, SiFlask, SiSpringboot, SiMysql    } from "react-icons/si";
import { TbFileTypeHtml } from "react-icons/tb";

import Weather from "./Images/weather.jpg";
import DJLite from "./Images/DJLite.png";
import Website from "./Images/Website.png";
import Orbital from "./Images/Orbital.png";

import { FaLinkedin, FaGithub, FaInstagram   } from "react-icons/fa6";

import { CgMail } from "react-icons/cg";




const Skills = () => {
    return (
        <div class="flex flex-col items-center justify-center mt-20 pb-20">
        <div class="flex flex-col items-center justify-center w-1/2 border-0 border-red-500">

            <div class="text-white font-roboto-mono text-lg" id="connect">What I know</div>

            <div class="grid grid-cols-5 mt-10 gap-x-10 gap-y-14 ">

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
                    <TbFileTypeHtml class="mt-2" size={44}/>
                    <h1 class="mt-2">HTML</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <FaCss3  class="mt-2" size={44}/>
                    <h1 class="mt-2">CSS</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <SiTailwindcss  class="mt-2" size={44}/>
                    <h1 class="mt-2">Tailwind</h1>
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
                    <FaGithub   class="mt-2" size={44}/>
                    <h1 class="mt-2">Github</h1>
                </div>

                <div class="text-white flex flex-col items-center font-roboto-mono font-bold text-lg border-2 border-white rounded-lg w-32">
                    <FaSquareGit   class="mt-2" size={44}/>
                    <h1 class="mt-2">Git</h1>
                </div>

            </div>

          
    

        </div>

        <div class="text-white font-roboto-mono text-lg mt-32" id="connect">Projects[]</div>
          
            <div class="grid grid-cols-3 w-10/12 border-0 mt-5 border-red-500 gap-x-4 gap-y-4">

                <a class="flex flex-col cursur-pointer border-2 border-white rounded-sm" href="https://github.com/ryanmoolala/Weather" target="_blank">
                    <div>
                        <img src={Weather}></img>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5">Weather web-app that displays the current weather conditions anywhere</h1>
                    </div>
                </a>

                <a class="cursur-pointer border-2 border-white rounded-sm" href="https://github.com/ryanmoolala/RyanBlog" target="_blank">
                    <div>
                        <img src={Website}></img>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5 text-center">My website</h1>
                    </div>
                </a>

                <a class="cursur-pointer border-2 border-white rounded-sm" href="https://github.com/ryanmoolala/DJ-Lite" target="_blank">
                    <div>
                        <img src={DJLite}></img>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5">Spotify web-app that tracks real time Spotify data ,revealing the user's favourite songs, artists and genres!</h1>
                    </div>
                </a>

                <a class="cursur-pointer border-2 border-white rounded-sm" href="https://github.com/ryanmoolala/DJ-Lite" target="_blank">
                    <div>
                        <img src={Orbital}></img>
                    </div>
                    <div>
                        <h1 class="text-white font-roboto-mono ml-3 mt-5">NUS Orbital ; ReflectiveMinds ; Apollo </h1>
                    </div>
                </a>

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