'use client';

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import {FaLaptopCode, FaFigma, FaServer, FaDocker} from 'react-icons/fa';
import {Link} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';

const serviceConfigs = [
    {
        key: 'webDev',
        icon: FaLaptopCode,
        tags: ['React', 'Next.js', 'Laravel', 'TypeScript'],
    },
    {
        key: 'uiUx',
        icon: FaFigma,
        tags: ['Figma', 'Tailwind', 'Responsive', 'shadcn/ui'],
    },
    {
        key: 'backend',
        icon: FaServer,
        tags: ['Express.js', 'Laravel', 'PostgreSQL', 'REST API'],
    },
    {
        key: 'devops',
        icon: FaDocker,
        tags: ['Docker', 'Vercel', 'CI/CD', 'Performance (basic)'],
    },
] as const;

const processSteps = ['discover', 'build', 'deliver'] as const;

const fadeIn = {
    initial: {opacity: 0, y: 20},
    animate: {
        opacity: 1,
        y: 0,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
    },
};

export default function Page() {
    const t = useTranslations('services');

    return (
        <section className="min-h-[80vh] py-12 xl:py-16">
            <div className="container flex flex-col gap-16 xl:gap-20">
                <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[720px]">
                    <h1 className="h2 text-white">{t('heading')}</h1>
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed">{t('subtitle')}</p>
                </motion.div>

                <motion.div
                    {...fadeIn}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10"
                >
                    {serviceConfigs.map((service, index) => {
                        const features = t.raw(`${service.key}.features`) as string[];

                        return (
                            <ServiceCard
                                key={service.key}
                                num={String(index + 1).padStart(2, '0')}
                                icon={service.icon}
                                title={t(`${service.key}.title`)}
                                description={t(`${service.key}.description`)}
                                features={features}
                                tags={[...service.tags]}
                                featuresLabel={t('featuresLabel')}
                                learnMore={t('learnMore')}
                            />
                        );
                    })}
                </motion.div>

                <motion.div {...fadeIn} className="flex flex-col gap-8">
                    <h2 className="h3 text-center xl:text-left">{t('process.title')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {processSteps.map((step, index) => (
                            <div
                                key={step}
                                className="relative flex flex-col gap-3 bg-[#232329] rounded-xl p-6 border border-white/5"
                            >
                                <span className="text-accent text-3xl font-extrabold">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-xl font-bold text-white">{t(`process.${step}.title`)}</h3>
                                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                                    {t(`process.${step}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    {...fadeIn}
                    className="flex flex-col items-center text-center gap-6 bg-[#232329] rounded-2xl p-8 sm:p-12 border border-accent/20"
                >
                    <h2 className="h3 text-white">{t('cta.title')}</h2>
                    <p className="text-white/60 max-w-[560px] leading-relaxed">{t('cta.description')}</p>
                    <Link href="/contact">
                        <Button size="lg">{t('cta.button')}</Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
