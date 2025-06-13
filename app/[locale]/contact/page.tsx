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

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+84) 338 015 137",
    },
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+84) 338 015 137",
    },
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+84) 338 015 137",
    },
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+84) 338 015 137",
    }
]

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
                <div className="flex flex-col xl:flex-row gap-[60px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className={'flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'}>
                            <h3 className={'text-4xl text-accent'}>{`Let's`} work together</h3>
                            <p className={'text-white/60'}>
                                tesadaskdasdllaskdldasdsadsadasdasdasdasdasdsa
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
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className={'w-full flex flex-col gap-10'}>
                            {info.map((item, index) => (
                                <li key={index} className={'flex items-center gap-6'}>
                                    <div
                                        className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className={'text-xl'}>{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </motion.section>
    );
}
