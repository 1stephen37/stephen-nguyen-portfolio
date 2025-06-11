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
        <motion.section >
            <div className="container">
                132
            </div>

        </motion.section>
    );
}
