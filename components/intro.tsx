"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import TypeIt from "typeit-react";

export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className = "relative mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="z-[-10] bg-[#CDDAFD] absolute top-[-10rem] h-[31.25rem] w-full rounded-full blur-[10rem]"></div>
            <div className = "relative flex items-center justify-center">
                
                <div className = "relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image 
                            src = "/abdul-portrait.jpeg"
                            width={192}
                            height={192}
                            alt = "Abdul El-Saied portrait"
                            quality="100"
                            priority={true}
                            className="h-24 w-24 rounded-full border-white border-[0.35rem] object-cover shadow-xl" 
                        />

                    </motion.div>
                </div>
            </div>
            <motion.h1
                id="typewriter"
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <TypeIt
                    options={{
                        strings: ["Hi, I'm Abdul! I am an EECS graduate from UC Berkeley and a current Master's of Computer Science student from Georgia Tech, with experience in full-stack development. Looking for SWE opportunities!"],
                        speed: 75,
                    }}
                />
            </motion.h1>
            <motion.div className = "flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    delay: 0.1
                }}
            >
                <Link 
                    href = "#contact" 
                    className = "group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me<BsArrowRight className = "opacity-70 group-hover:translate-x-1 transition"/>
                    
                </Link>

                <a 
                    href = "/abdule-resume-12-17.pdf"
                    download
                    className = "group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60">
                        Resume<HiDownload 
                        className = "opacity-60 group-hover:translate-y-1 transition"/>
                </a>

                <a 
                    href="https://www.linkedin.com/in/abdulelsaied/"
                    target = "_blank"
                    className = "bg-white p-4 text-gray-700 hover:text-gray-900 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60">
                    <BsLinkedin />
                </a>

                <a 
                    href="https://github.com/abdulelsaied"
                    target="_blank"
                    className = "bg-white p-4 text-gray-700 hover:text-gray-900 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
