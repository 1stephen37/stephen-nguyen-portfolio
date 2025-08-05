import Link from "next/link";

import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/1stephen37"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/nguy%E1%BB%85n-stephen-07b08622a/"
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
