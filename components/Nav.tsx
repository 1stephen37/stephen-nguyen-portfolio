'use client';

import {usePathname} from "next/navigation";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {links} from '@/app/contants';

export default function Nav() {
    const pathname = usePathname();
    const t = useTranslations('nav');

    const parts = pathname.split('/');
    const subPath = '/' + parts.slice(2).join('/');

    return (
        <nav className="flex flex-nowrap items-center gap-4 2xl:gap-8">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.path}
                    className={`whitespace-nowrap shrink-0 text-sm 2xl:text-base capitalize font-medium hover:text-accent transition-all ${
                        link.path === subPath ? 'text-accent border-b-2 border-accent' : ''
                    }`}
                >
                    {t(link.key)}
                </Link>
            ))}
        </nav>
    );
}
