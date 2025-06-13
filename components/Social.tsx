import Link from "next/link";

import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/1stephen37"
    },
    {
        icon: <FaLinkedin />,
        path: "/"
    },
    {
        icon: <FaYoutube />,
        path: "https://www.youtube.com/@SourcesTeam"
    },
]

export default function Social({containerStyles, iconStyles} : {containerStyles: string, iconStyles: string}) {
    return (
        <div className={containerStyles}>
            {socials.map((social,index) => (
                <Link key={index} href={social.path} className={iconStyles} target={'_blank'}>
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}
