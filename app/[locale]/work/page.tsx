'use client';

import {motion} from 'framer-motion';
import React, {useState} from "react";

import {Swiper} from 'swiper';
import "swiper/css";

import {BsArrowRight, BsGithub} from "react-icons/bs";

import {Tooltip, TooltipTrigger, TooltipContent, TooltipProvider} from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Project 1 description",
        stack: [
            {
                name: "Html 5"
            },
            {
                name: "Css 3"
            },
            {
                name: "JavaScript"
            }
        ],
        image: '/assets/work/thumb1.png',
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "Project 2 description",
        stack: [
            {
                name: "Next.js"
            },
            {
                name: "Tailwind.css"
            },
            {
                name: "Node.js"
            }
        ],
        image: '/assets/work/thumb2.png',
        live: "",
        github: ""
    },
]

export default function Page() {

    const [project, setProject] = useState(projects[0]);

    return (
        <motion.section initial={{
            opacity: 0,
        }} animate={{
            opacity: 1,
        }} className={'min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'}>
            <div className="container">
                <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
                    <div
                        className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="">
                            <div
                                className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className={`text-[42px] font-bold leading-none
                             text-white group-hover:text-accent transition-all duration-500 capitalize`}>{project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className={'flex gap-4'}>
                                {project.stack.map((item, index) => (
                                    <li key={index} className={'text-xl text-accent'}>{item.name},</li>
                                ))}
                            </ul>
                            <div className="">
                                <Link href={''}>
                                    <TooltipProvider>
                                        <Tooltip>

                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">slider</div>
                </div>
            </div>
        </motion.section>
    );
}
