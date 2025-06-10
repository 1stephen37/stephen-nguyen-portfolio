'use client';

import Link from 'next/link';
import {usePathname} from "next/navigation";

const links = [
    {
        name: 'home',
        vName: "trang chủ",
        path: '/',
    },
    {
        name: 'services',
        vName: "dịch vụ",
        path: '/services',
    },
    {
        name: 'resume',
        vName: "hồ sơ năng lực",
        path: '/resume',
    },
    {
        name: 'work',
        vName: "dự án",
        path: '/work',
    },
    {
        name: 'contact',
        vName: "liên hệ",
        path: '/contact',
    }
]

export default function Nav() {
    const pathname = usePathname();

    const parts = pathname.split('/'); // ['', 'vi', 'resume']
    const locale = parts[1] || 'vi'; // fallback nếu rỗng
    const subPath = '/' + parts.slice(2).join('/');

    return (
        <nav className={'flex gap-8 items-center'}>
            {links.map((link, index) => (
                <Link key={index} href={link.path}
                      className={`${link.path === subPath && 'text-accent border-b-2 border-accent'} capitalize
                       font-medium hover:text-accent transition-all `}> {locale === 'vi' ? link.vName : link.name}</Link>
            ))}
        </nav>
    );
}

