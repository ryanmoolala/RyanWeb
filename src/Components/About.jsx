import React from "react";

import { IoDocumentTextOutline } from "react-icons/io5";
import Resume from './Document/resume 7.pdf';

import { FaLinkedin, FaGithub, FaInstagram   } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";



const About = () => {
    return (
        <div class="flex flex-col justify-center items-center space-y-20 pb-20">
            <div class="flex flex-col justify-center items-center  w-1/2 mt-20 text-white space-y-14">

                <div class="font-roboto-mono text-xl">
                    <div>About me</div>

    
                </div>

                <div class="flex flex-row mt-5">
                    <div>
                        Hi, I'm Ryan! Curious and analytical, I've always been keen to learn. From a young age, my interest in technology blossomed. Driven by a passion for problem-solving, I chose computer science as my major – a decision that feels absolutely right to me. As I tinker with programming languages and delve into the transformative power of technology in the modern world, my aspiration is to pursue this field of study and contribute to positive change.
                    </div>

                </div>

                <a class="mt-6" href={Resume} download>
                <div class="flex flex-row items-center space-x-1 text-xl font-roboto-mono cursor-default">
                    <h1 class="">Resume</h1>
                    <IoDocumentTextOutline/>
                </div>
                </a>

            </div>

            <div class="text-white flex justify-center">
                <ol class="relative border-s border-0 border-gray-200 w-1/2">       
                               
                    <li class="mb-14 ms-6">            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-300">NUS SoC<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Currently studying Computer Science until 2027</time>
                  <p class="text-base font-normal">Awarded NUS Merit Scholarship</p>     
                  <br></br>
                  <p class="text-base font-normal">NUS Orbital, a SWE summer project</p>     
                  <br></br>
                  <p class="text-base font-normal">Took part in the PSA Code sprint hackathon, with NUS friends</p>    
        
                    </li>
                
                   <li class="mb-14 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
                 <h3 class="mb-2 text-lg font-semibold text-gray-300">ACJC</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Studied here during 2019 - 2020</time>
            <p class="text-base font-normal">Scored a perfect score for A Level National Examinations </p>
        <br/>
        <p class="text-base font-normal ">Attained 6 Distinctions & 2 Scholarships for good academic & leadership performance</p>
        <br/>
        <p class="text-base font-normal ">Enrolled into National University of Singapore (NUS), Computer Science</p>
                   </li>
                   <li class="ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
               <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
          </span>

        <h3 class="mb-1 text-lg font-semibold text-gray-300">ACS (Barker Road)</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Studied here during 2016 - 2018</time>
        <p class="text-base font-normal  text-white">Performed well for O levels and applied for Anglo-Chinese Junior College (ACJC)</p>
    </li>
    
</ol>


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

export default About;