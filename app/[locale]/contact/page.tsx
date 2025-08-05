'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {motion} from 'framer-motion';

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
                <div className="xl:h-[54%] xl:w-[50%] mx-auto order-2 xl:order-none">
                        <form className={'flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'}>
                            <h3 className={'text-4xl text-accent'}>{`Let's`} work together</h3>
                            <p className={'text-white/60'}>
                                Have a question, a project in mind, or just want to say hello? Reach out using the form below. I'm always happy to hear from you!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type={'text'} placeholder={'FirstName'}/>
                                <Input type={'text'} placeholder={'LastName'}/>
                                <Input type={'text'} placeholder={'Email address'}/>
                                <Input type={'text'} placeholder={'Phone number'}/>
                            </div>
                            <Select>
                                <SelectTrigger className={'w-full '}>
                                    <SelectValue placeholder={'Select a service'}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value={'est'}>Web development</SelectItem>
                                        <SelectItem value={'ui'}>UI/Ux</SelectItem>
                                        <SelectItem value={'logo'}>Logo design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className={'h-[200px]'} defaultValue={'Type your message here.'}/>
                            <Button size={'md'} className={'max-w-40 '}>
                                Send message
                            </Button>
                        </form>
                    </div>
            </div>

        </motion.section>
    );
}
