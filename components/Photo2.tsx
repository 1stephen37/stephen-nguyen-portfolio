'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';

export default function Photo2() {
    return (
        <div className={'w-full h-full relative'}>
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        ease: 'easeIn'
                    }
                }}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: 'easeInOut'
                        }
                    }}
                    className="w-full max-w-[298px] aspect-square xl:max-w-[380px] mix-blend-lighten absolute left-1/2 -translate-x-1/2 xl:left-auto xl:translate-x-0">
                    <Image src={'/assets/photo.png'} alt={''} priority quality={100} fill sizes={'100'}
                           className={'object-contain'}/>
                </motion.div>

                <motion.svg className={'w-full max-w-[300px] xl:max-w-[400px] aspect-square mx-auto'}
                            fill={"transparent"} viewBox="0 0 506 506" xmlns={'http://www.w3.org/2000/svg'}>
                    <motion.circle cx={"253"} cy={'253'} r={'250'} stroke={"#00ff99"} strokeWidth={'4'} strokeLinecap={'round'}
                                   strokeLinejoin={'round'}
                                   initial={{
                                       strokeDasharray: "24 10 0 0"
                                   }}
                                   animate={{
                                       strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                       rotate: [120, 360]
                                   }}
                                   transition={{
                                       duration: 20,
                                       repeat: Infinity,
                                       repeatType: "reverse"
                                   }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}
