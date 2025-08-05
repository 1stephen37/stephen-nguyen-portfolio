'use client';

import {BsArrowRight} from 'react-icons/bs';
import Link from 'next/link';

import {motion} from 'framer-motion';

const services = [
    {
        num: "01",
        title: "Web development",
        description: "Building responsive, fast, and scalable websites using modern technologies.",
        href: ""
    },
    {
        num: "02",
        title: "UI/UX design",
        description: "Designing intuitive and visually appealing interfaces for a seamless user experience.",
        href: ""
    },
    {
        num: "03",
        title: "Logo design",
        description: "Creating unique and memorable logos that represent your brand identity.",
        href: ""
    },
    {
        num: "04",
        title: "SEO",
        description: "Optimizing websites to rank higher on search engines and attract more visitors.",
        href: ""
    }
]

export default function Page() {
    return (
        <section className={'min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'}>
            <div className="container">
                <motion.div initial={{
                    opacity: 0,
                }} animate={{
                    opacity: 1,
                    transition: {
                        delay: 2.4,
                        duration: 0.4,
                        ease: "easeIn",
                    }
                }} className={'grid grid-cols-1 md:grid-cols-2 gap-[60px]'}>
                    {services.map((item, index) => (
                        <div key={index} className={'flex-1 flex flex-col justify-center gap-6 group'}>
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent
                                group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                                <Link href={item.href} className={`w-[70px] h-[70px] rounded-full bg-white
                                 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-0 rotate-45`}>
                                    <BsArrowRight className={'text-primary text-3xl'}/>
                                </Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
                            <p className={'text-white/60 '}>{item.description}</p>
                            <div className="border-b border-white/20 w-full"/>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
