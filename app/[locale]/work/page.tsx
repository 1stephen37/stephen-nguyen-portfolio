'use client';

import {motion, AnimatePresence} from 'framer-motion';
import {useMemo, useRef, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade} from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';
import "swiper/css";
import "swiper/css/effect-fade";
import Link from 'next/link';
import {AiFillGithub, AiFillGitlab} from "react-icons/ai";
import {BsArrowUpRight} from "react-icons/bs";
import {useTranslations} from 'next-intl';
import WorkSliderBtn from "@/components/WorkSliderBtn";
import WorkBrowserPreview from "@/components/WorkBrowserPreview";
import WorkProjectTabs from "@/components/WorkProjectTabs";
import {Button} from '@/components/ui/button';

const projectConfigs = [
    {
        num: "01",
        key: 'fsources',
        badges: ['team', 'confidential'] as const,
        stack: ["Next.js", "Laravel", "Tailwind", "Docker", "PostgreSQL"],
        image: '/assets/work/thumb1.png',
        live: "",
        frontend: "",
        backend: "",
        featured: false,
    },
    {
        num: "02",
        key: 'fasco',
        badges: [] as const,
        stack: ["Angular", "Tailwind", "Node.js", "TypeScript", "MySQL"],
        image: '/assets/work/thumb2.png',
        live: "",
        frontend: "https://github.com/1stephen37/Fasco_shop_angular",
        backend: "https://github.com/1stephen37/backend_ts_fasco",
        featured: false,
    },
    {
        num: "03",
        key: 'stech',
        badges: [/*'uiClone'*/] as const,
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive UI"],
        image: '/assets/work/thumb4.png',
        live: "https://stech-static.vercel.app/",
        frontend: "https://github.com/1stephen37/next_s_tech",
        backend: "",
        featured: true,
    },
] as const;

const fadeIn = {
    initial: {opacity: 0, y: 20},
    animate: {
        opacity: 1,
        y: 0,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
    },
};

export default function Page() {
    const t = useTranslations('work');
    const swiperRef = useRef<SwiperType | null>(null);

    const projects = useMemo(
        () => projectConfigs.map((config) => ({
            ...config,
            name: t(`projects.${config.key}.name`),
            category: t(`projects.${config.key}.category`),
            title: t(`projects.${config.key}.title`),
            description: t(`projects.${config.key}.description`),
            role: t(`projects.${config.key}.role`),
            previewLabel: t(`projects.${config.key}.previewLabel`),
            highlights: t.raw(`projects.${config.key}.highlights`) as string[],
            badges: config.badges.map((badge) => t(`badges.${badge}`)),
        })),
        [t]
    );

    const [projectIndex, setProjectIndex] = useState(0);
    const project = projects[projectIndex];

    const handleSlideChange = (swiper: SwiperType) => {
        setProjectIndex(swiper.activeIndex);
    };

    const handleTabSelect = (index: number) => {
        setProjectIndex(index);
        swiperRef.current?.slideTo(index);
    };

    return (
        <section className="min-h-[80vh] py-12 xl:py-16">
            <div className="container flex flex-col gap-10 xl:gap-14">
                <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[720px]">
                    <h1 className="h2 text-white">{t('heading')}</h1>
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed">{t('subtitle')}</p>
                </motion.div>

                <motion.div {...fadeIn}>
                    <WorkProjectTabs
                        projects={projects.map((p) => ({
                            key: p.key,
                            name: p.name,
                            badges: p.badges,
                            featured: p.featured,
                        }))}
                        activeIndex={projectIndex}
                        featuredLabel={t('featured')}
                        onSelect={handleTabSelect}
                    />
                </motion.div>

                <div className="flex flex-col xl:flex-row xl:items-start gap-10 xl:gap-16">
                    <div className="w-full xl:w-1/2 order-2 xl:order-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={project.key}
                                initial={{opacity: 0, x: -24}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: 24}}
                                transition={{duration: 0.35, ease: 'easeOut'}}
                                className="flex flex-col gap-6"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-6xl sm:text-7xl font-extrabold text-transparent text-outline leading-none">
                                        {project.num}
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                                            {project.category} {t('projectSuffix')}
                                        </span>
                                        <span className="text-white/40 text-sm">
                                            {projectIndex + 1} / {projects.length}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight">
                                            {project.name}
                                        </h2>
                                        {project.badges.map((badge) => (
                                            <span
                                                key={badge}
                                                className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-white/10 text-white/50"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-lg sm:text-xl text-accent/90 font-medium">
                                        {project.title}
                                    </p>
                                </div>

                                <p className="text-white/60 leading-relaxed">{project.description}</p>

                                <div className="flex flex-col gap-2">
                                    <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                                        {t('roleLabel')}
                                    </p>
                                    <p className="text-white font-medium">{project.role}</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs sm:text-sm px-3 py-1 rounded-full border border-accent/30 text-accent"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
                                    <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                                        {t('highlightsLabel')}
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {project.highlights.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"/>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.live !== '' && (
                                        <Link href={project.live} target="_blank">
                                            <Button className="gap-2">
                                                {t('viewLive')}
                                                <BsArrowUpRight className="text-lg"/>
                                            </Button>
                                        </Link>
                                    )}
                                    {project.frontend !== '' && (
                                        <Link href={project.frontend} target="_blank">
                                            <Button variant="outline" className="gap-2">
                                                <AiFillGithub className="text-lg"/>
                                                {t('viewFrontend')}
                                            </Button>
                                        </Link>
                                    )}
                                    {project.backend !== '' && (
                                        <Link href={project.backend} target="_blank">
                                            <Button variant="outline" className="gap-2">
                                                <AiFillGitlab className="text-lg"/>
                                                {t('viewBackend')}
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="w-full xl:w-1/2 order-1 xl:order-2">
                        <Swiper
                            modules={[EffectFade]}
                            effect="fade"
                            fadeEffect={{crossFade: true}}
                            spaceBetween={30}
                            slidesPerView={1}
                            className="w-full"
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((item) => (
                                <SwiperSlide key={item.key}>
                                    <WorkBrowserPreview
                                        image={item.image}
                                        previewLabel={item.previewLabel}
                                        name={item.name}
                                    />
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtn
                                containerStyles="flex gap-2 absolute -bottom-14 left-0 right-0 xl:bottom-4 xl:right-4 xl:left-auto z-20 justify-center xl:justify-end"
                                iconStyles=""
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
