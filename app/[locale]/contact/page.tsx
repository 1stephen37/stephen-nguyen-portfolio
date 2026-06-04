'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export default function Page() {
    const t = useTranslations('contact');

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
        }} className={'py-6 '}>
            <div className="container">
                <div className="w-full xl:w-[50%] mx-auto order-2 xl:order-none">
                        <form className={'flex flex-col gap-6 p-6 sm:p-10 bg-[#27272c] rounded-xl'}>
                            <h3 className={'text-3xl sm:text-4xl text-accent'}>{t('title')}</h3>
                            <p className={'text-white/60'}>
                                {t('description')}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type={'text'} placeholder={t('firstName')}/>
                                <Input type={'text'} placeholder={t('lastName')}/>
                                <Input type={'text'} placeholder={t('email')}/>
                                <Input type={'text'} placeholder={t('phone')}/>
                            </div>
                            <Select>
                                <SelectTrigger className={'w-full '}>
                                    <SelectValue placeholder={t('selectService')}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>{t('selectService')}</SelectLabel>
                                        <SelectItem value={'webDev'}>{t('services.webDev')}</SelectItem>
                                        <SelectItem value={'uiUx'}>{t('services.uiUx')}</SelectItem>
                                        <SelectItem value={'backend'}>{t('services.backend')}</SelectItem>
                                        <SelectItem value={'devops'}>{t('services.devops')}</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className={'h-[200px]'} placeholder={t('message')}/>
                            <Button size={'md'} className={'max-w-40 '}>
                                {t('send')}
                            </Button>
                        </form>
                    </div>
            </div>

        </motion.section>
    );
}
