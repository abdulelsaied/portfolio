"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from "./project"
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {

    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section
            ref={ref}
            id="projects"
            className ="relative scroll-mt-28 mb-28"
        >
            <div className="z-[-10] bg-[#BEE1E6] absolute top-[-10rem] h-[80rem] w-full rounded-full blur-[10rem]"></div>
            <SectionHeading>Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key = {index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))
                }               
            </div>
        </section>
    )
}