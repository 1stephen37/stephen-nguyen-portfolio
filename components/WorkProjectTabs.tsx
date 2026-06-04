'use client';

import {cn} from '@/lib/utils';

type WorkProjectTabsProps = {
    projects: {key: string; name: string; badges?: string[]; featured?: boolean}[];
    activeIndex: number;
    featuredLabel: string;
    onSelect: (index: number) => void;
};

export default function WorkProjectTabs({
    projects,
    activeIndex,
    featuredLabel,
    onSelect,
}: WorkProjectTabsProps) {
    return (
        <div className="flex flex-wrap gap-3">
            {projects.map((project, index) => (
                <button
                    key={project.key}
                    type="button"
                    onClick={() => onSelect(index)}
                    className={cn(
                        'relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border flex items-center gap-2 flex-wrap',
                        activeIndex === index
                            ? 'bg-accent text-primary border-accent'
                            : 'bg-[#232329] text-white/70 border-white/10 hover:border-accent/40 hover:text-accent'
                    )}
                >
                    <span>{project.name}</span>
                    {project.badges?.map((badge) => (
                        <span
                            key={badge}
                            className={cn(
                                'text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full',
                                activeIndex === index
                                    ? 'bg-primary/20 text-primary'
                                    : 'bg-white/5 text-white/50'
                            )}
                        >
                            {badge}
                        </span>
                    ))}
                    {project.featured && (
                        <span className={cn(
                            'text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full',
                            activeIndex === index
                                ? 'bg-primary/20 text-primary'
                                : 'bg-accent/10 text-accent'
                        )}>
                            {featuredLabel}
                        </span>
                    )}
                </button>
            ))}
        </div>
    );
}
