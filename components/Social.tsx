import Link from "next/link";

import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "/"
    },
    {
        icon: <FaLinkedin />,
        path: "/"
    },
    {
        icon: <FaYoutube />,
        path: "/"
    },
    {
        icon: <FaTwitter />,
        path: "/"
    },
]

export default function Social({containerStyles, iconStyles} : {containerStyles: string, iconStyles: string}) {
    return (
        <div className={containerStyles}>
            {socials.map((social,index) => (
                <Link key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}
