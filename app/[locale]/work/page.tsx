'use client';

import {motion} from 'framer-motion';
import React, {useState} from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper';
import "swiper/css";

import {Tooltip, TooltipTrigger, TooltipContent, TooltipProvider} from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtn from "@/components/WorkSliderBtn";
import {AiFillGithub, AiFillGitlab} from "react-icons/ai";

const projects = [
    {
        num: "01",
        category: "Fullstack",
        title: `build website for online course business "Fsources"`,
        description: `Built a full-featured website for "Fsources", an online education business. The platform allows instructors to upload and manage courses, while learners can register, purchase courses, and track their learning progress. Key features include user authentication, video streaming, responsive UI, and a secure payment system.`,
        stack: [
            {
                name: "NextJS"
            },
            {
                name: "Laravel"
            },
            {
                name: "Tailwindcss"
            },
            {
                name: "Docker"
            },
            {
                name: "PostgreSQL"
            },
        ],
        image: '/assets/work/thumb1.png',
        live: "",
        github: "",
        frontend: "",
        backend: ""
    },
    {
        num: "02",
        category: "fullstack",
        title: `build website for online business "Fasco shop"`,
        description: "Fasco Shop is an online clothing store designed to provide customers with a seamless shopping experience. This project focuses on creating a visually appealing and user-friendly website that showcases a variety of clothing items. The site is built using modern technologies to ensure performance, responsiveness, and ease of use.",
        stack: [
            {
                name: "Angular"
            },
            {
                name: "Tailwindcss"
            },
            {
                name: "NodeJs"
            },
            {
                name: "TypeScript"
            },
            {
                name: "MySQL"
            },
        ],
        image: '/assets/work/thumb2.png',
        live: "",
        github: "",
        frontend: "https://github.com/1stephen37/Fasco_shop_angular",
        backend: "https://github.com/1stephen37/backend_ts_fasco"
    },
    {
        num: "03",
        category: "fullstack",
        title: `build website for online smart phone business "STech"`,
        description: "STech is an e-commerce platform designed for selling smartphones. The website features a user-friendly shopping cart system, allowing customers to easily add products. It includes functionality for managing smartphone specifications, such as memory and color options. STech ensures a seamless and efficient shopping experience.Project 2 description",
        stack: [
            {
                name: "Next.js"
            },
            {
                name: "Tailwind.css"
            },
            {
                name: "Node.js"
            },
            {
                name: "Express"
            },
            {
                name: "PostgreSQL"
            }
        ],
        image: '/assets/work/thumb4.png',
        live: "",
        github: "",
        frontend: "https://github.com/1stephen37/next_s_tech",
        backend: "https://github.com/1stephen37/backend_s_tech"
    }
]

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
                            <div className="flex flex-col gap-[30px] h-1/2 group">
                                <div
                                    className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                                <div className="capitalize font-bold leading-none text-white">{project.category} project
                                </div>
                                <h2 className={`text-[42px] font-bold leading-none
                             text-white group-hover:text-accent transition-all duration-500 capitalize`}>{project.title}</h2>
                                <p className="text-white/60">{project.description}</p>
                                <ul className={'flex flex-wrap gap-4'}>
                                    {project.stack.map((item, index) => (
                                        <li key={index} className={'text-xl text-accent'}>
                                            {item.name}{index !== project.stack.length - 1 && ','}
                                        </li>
                                    ))}
                                </ul>
                                <div className="border border-white/20"/>
                                <div className="flex items-center gap-4">
                                    {project.frontend !== '' && (
                                        <Link target={'_blank'} href={project.frontend}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger
                                                        className={'w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'}>
                                                        <AiFillGithub
                                                            className={'text-white text-3xl group-hover:text-accent'}/>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        Frontend repository
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                    )}
                                    {project.backend !== '' && (
                                        <Link target={'_blank'} href={project.backend}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger
                                                        className={'w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'}>
                                                        <AiFillGitlab
                                                            className={'text-white text-3xl group-hover:text-accent'}/>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        Backend repository
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2">
                            <Swiper spaceBetween={30} slidesPerView={1} className={'xl:h-[520px] mb-12'}
                                    onSlideChange={handleSlideChange}>
                                {projects.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="h-[300px] md:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"/>
                                            <div className="relative w-full h-full">
                                                <Image src={item.image} alt={''} fill sizes={'100'}
                                                       className={'object-contain md:object-cover'}/>
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