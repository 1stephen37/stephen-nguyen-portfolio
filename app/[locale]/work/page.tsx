'use client';

import {motion} from 'framer-motion';
import React, {useState} from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper';
import "swiper/css";

import {BsArrowRight, BsGithub} from "react-icons/bs";

import {Tooltip, TooltipTrigger, TooltipContent, TooltipProvider} from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtn from "@/components/WorkSliderBtn";

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
// const [project, setProject] = useState(projects[0]);


export default function Page() {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: SwiperType) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <>
            <motion.section initial={{
                opacity: 0,
            }} animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }} className={'min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'}>
                <div className="container">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
                        <div
                            className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px] h-1/2">
                                <div
                                    className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                                <h2 className={`text-[42px] font-bold leading-none
                             text-white group-hover:text-accent transition-all duration-500 capitalize`}>{project.category} project</h2>
                                <p className="text-white/60">{project.description}</p>
                                <ul className={'flex gap-4'}>
                                    {project.stack.map((item, index) => (
                                        <li key={index} className={'text-xl text-accent'}>
                                            {item.name}{index !== project.stack.length - 1 && ','}
                                        </li>
                                    ))}
                                </ul>
                                <div className="border border-white/20"/>
                                <div className="flex items-center gap-4">
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    className={'w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'}>
                                                    <BsArrowRight
                                                        className={'text-white text-3xl group-hover:text-accent'}/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    Live project
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    className={'w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'}>
                                                    <BsGithub
                                                        className={'text-white text-3xl group-hover:text-accent'}/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    Github repository
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2">
                            <Swiper spaceBetween={30} slidesPerView={1} className={'xl:h-[520px] mb-12'}
                                    onSlideChange={handleSlideChange}>
                                {projects.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"/>
                                            <div className="relative w-full h-full">
                                                <Image src={item.image} alt={''} fill sizes={'100'}
                                                       className={'object-cover'}/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <WorkSliderBtn
                                    containerStyles={'flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'}
                                    iconStyles={''}
                                    btnStyles={'bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'}
                                />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}