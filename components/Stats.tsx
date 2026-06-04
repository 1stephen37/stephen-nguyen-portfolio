'use client';
import CountUp from "react-countup";
import {useTranslations} from 'next-intl';

const stats = [
    {num: 3, key: 'yearsLearning'},
    {num: 2, key: 'projectsCompleted'},
    {num: 4, key: 'technologiesMastered'},
    {num: 1400, key: 'codeCommits'},
] as const;

export default function Stats() {
    const t = useTranslations('stats');

    return (
        <section className={'pt-4 pb-12 xl:pt-0 xl:pb-0'}>
            <div className="container">
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 xl:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex gap-3 sm:gap-4 items-center justify-start xl:justify-start min-w-0"
                        >
                            <CountUp
                                end={stat.num}
                                duration={5}
                                delay={2}
                                className="text-3xl sm:text-4xl xl:text-6xl font-extrabold shrink-0"
                            />
                            <p className="text-sm sm:text-base leading-snug text-white/80 min-w-0">
                                {t(stat.key)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
