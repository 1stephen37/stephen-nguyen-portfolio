'use client';

import Link from 'next/link';
import {usePathname} from "next/navigation";
import {links} from '@/app/contants';

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
                       font-medium hover:text-accent transition-all `}>{locale === 'vi' ? link.vName : link.name}</Link>
            ))}
        </nav>
    );
}

