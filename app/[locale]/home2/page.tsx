"use client";

import StatItem from "@/components/StatItem";
import TechItem from "@/components/TechItem";
import {motion} from "framer-motion";
import {useTranslations} from 'next-intl';
import {FaNodeJs, FaReact, FaDocker} from "react-icons/fa";
import {SiLogitechg, SiMongodb, SiTypescript} from "react-icons/si";
import Photo2 from "@/components/Photo2";
import RoleCard from "@/components/RoleCard";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Link from "next/link";
import TerminalCard from "@/components/TerminalCard";

export default function Page() {
    const tIndex = useTranslations('index');
    const t = useTranslations('home2');

    return (
        <motion.section initial={{
            opacity: 0,
        }} animate={{
            opacity: 1,
            transition: {
                delay: 2.4,
                duration: 0.4,
                ease: "easeIn"
            }
        }} className="min-h-[80vh] container flex flex-col justify-between gap-4 pt-12 xl:px-0 md:flex-row">
            <div className="w-full flex flex-col gap-4 xl:w-1/2 order-2 xl:order-1">
                <RoleCard/>
                <p className="text-left  bg-[#0f172a] rounded-xl shadow-lg border border-gray-700 p-4">
                    {tIndex('description')}
                </p>
                <TerminalCard/>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full sm:w-max mx-auto">
                    <Link target={'_blank'} href={'https://github.com/1stephen37'} className="w-full sm:w-auto">
                        <Button size={'lg'} className="w-full sm:w-auto">
                            {t('viewGithub')}
                        </Button>
                    </Link>
                    <a href={'/assets/resume/stephen_dev_cv_avanced.pdf.pdf'} download className="w-full sm:w-auto">
                        <Button variant={'outline'} size={'lg'} className={'uppercase flex items-center justify-center gap-2 w-full sm:w-auto'}>
                            <span>{tIndex('downloadCV')}</span>
                            <FiDownload className={'text-xl'}/>
                        </Button>
                    </a>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 xl:w-1/2 order-1 xl:order-2">
                <motion.h1
                    className="text-4xl md:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                >
                    {tIndex('name')}
                </motion.h1>
                <div className={'order-1 xl:order-none mb-8 xl:mb-0'}>
                    <div className="w-max mx-auto xl:order-2 order-1">
                        <Photo2/>
                    </div>
                </div>
                <div className="order-2 xl:order-2">
                    <div className="flex flex-col gap-4 mb-4">
                        <div className="text-xl flex gap-4 justify-center">
                            <SiLogitechg className={'text-accent'}/>
                            <div className="">{t('techStack')}</div>
                        </div>
                        <div className="flex gap-4 flex-wrap justify-center">
                            <TechItem icon={<FaNodeJs/>} name="Node.js"/>
                            <TechItem icon={<FaReact/>} name="React"/>
                            <TechItem icon={<SiTypescript/>} name="TypeScript"/>
                            <TechItem icon={<SiMongodb/>} name="MongoDB"/>
                            <TechItem icon={<FaDocker/>} name="Docker"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
                        <StatItem number="3" label={t('studyYears')}/>
                        <StatItem number="2" label={t('projectsCompleted')}/>
                        <StatItem number="4" label={t('technologiesMastered')}/>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
