'use client';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from '@/components/ui/sheet';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {CiMenuFries} from "react-icons/ci";
import {VisuallyHidden} from '@radix-ui/react-visually-hidden';
import {links} from '@/app/contants';

export default function MobileNav() {
    const pathname = usePathname();
    const t = useTranslations('nav');

    const parts = pathname.split('/');
    const subPath = '/' + parts.slice(2).join('/');

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4 pt-10">
                <VisuallyHidden>
                    <SheetTitle>{t('mobileNavigation')}</SheetTitle>
                </VisuallyHidden>

                <div className="mt-32 mb-40 text-center text-2xl font-bold">
                    <Link href={'/'}>
                        <h1 className={'text-4xl font-semibold'}>Stephen<span className={'text-accent'}>.</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`capitalize text-xl hover:text-accent transition-all ${
                                link.path === subPath && 'text-accent border-b-2 border-accent'
                            }`}
                        >
                            {t(link.key)}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
