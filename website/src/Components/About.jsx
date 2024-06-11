import React from "react";

import { IoDocumentTextOutline } from "react-icons/io5";
import Resume from './Doc/Resume 5.pdf';



const About = () => {
    return (
        <div class="flex flex-col justify-center items-center">
            <div class="flex flex-col justify-center items-center  w-1/2 mt-20 text-white">

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
        </div>
    )
}

export default About;