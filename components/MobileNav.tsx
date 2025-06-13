'use client';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from '@/components/ui/sheet';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from "react-icons/ci";
import {VisuallyHidden} from '@radix-ui/react-visually-hidden';
import {links} from '@/app/contants';

export default function MobileNav() {
    const pathname = usePathname();
    const parts = pathname.split('/'); // ['', 'vi', 'resume']
    const locale = parts[1] || 'vi'; // fallback nếu rỗng
    const subPath = '/' + parts.slice(2).join('/');
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4 pt-10">
                <VisuallyHidden>
                    <SheetTitle>Mobile Navigation</SheetTitle>
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
                            {locale === 'vi' ? link.vName : link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
