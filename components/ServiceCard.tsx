'use client';

import {BsArrowRight} from 'react-icons/bs';
import {Link} from '@/i18n/navigation';
import {IconType} from 'react-icons';

type ServiceCardProps = {
    num: string;
    icon: IconType;
    title: string;
    description: string;
    features: string[];
    tags: string[];
    featuresLabel: string;
    learnMore: string;
};

export default function ServiceCard({
    num,
    icon: Icon,
    title,
    description,
    features,
    tags,
    featuresLabel,
    learnMore,
}: ServiceCardProps) {
    return (
        <div className="group flex flex-col gap-6 bg-[#232329] rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-accent/30 transition-all duration-500">
            <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                        <Icon/>
                    </div>
                    <span className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                        {num}
                    </span>
                </div>
                <Link
                    href="/contact"
                    aria-label={learnMore}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-0 rotate-45 shrink-0"
                >
                    <BsArrowRight className="text-white group-hover:text-primary text-2xl sm:text-3xl"/>
                </Link>
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                    {title}
                </h2>
                <p className="text-white/60 leading-relaxed">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs sm:text-sm px-3 py-1 rounded-full border border-accent/30 text-accent"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
                <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">{featuresLabel}</p>
                <ul className="flex flex-col gap-2">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-white/70 text-sm sm:text-base">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"/>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
