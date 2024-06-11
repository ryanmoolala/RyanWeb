import React from "react";

import { FaLinkedin, FaGithub, FaInstagram   } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";



const Home = () => {
    return (
        <div class="flex flex-col items-center justify-center mt-28">

            <div class="text-white w-1/2 border-0 border-red-500 flex flex-row flex-shrink-0">


                <div class="flex justify-center w-1/4 ml-20 ">
                    <img alt="profile" class="object-cover rounded-full border-2 border-red-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAOvHAOupKg_ROmEUlOc7KZ5eOWYnQh9tJQ&s"></img>
                </div>

                <div class="ml-32 flex-grow mt-5 w-96 space-y-10">
                    <h1 class="font-roboto-slab font-bold text-6xl mb-3">Ryan</h1>

                    <div class="w-96 -translate-x-16" id="about">Computer Science Undergraudate @ NUS</div>

                    <p class="mt-7">I am a first year CS student @ NUS. My interest lie in Networking, Cloud & Parallel computing. I do see myself venturing into other revolutionary technologies such as A.I. </p>

                </div>

            </div>

            <div class="flex flex-col justify-center items-center border-0 border-red-500 w-1/2 mt-28">
                <div>
                    <h1 class="text-white font-roboto-mono text-lg" id="connect">.connect() </h1>
                </div>
                
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

export default Home;