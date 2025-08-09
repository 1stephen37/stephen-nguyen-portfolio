import Link from "next/link";
import {Button} from '@/components/ui/button';

// components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import {useTranslations} from "next-intl";

export default function Header() {
    const t = useTranslations('index');

    return (
        <header className={'py-8 xl:py-12 '}>
            <div className="container flex justify-between items-center">
                {/*logo*/}
                <Link href={'/'}>
                    <h1 className={'text-4xl font-semibold'}>Stephen<span className={'text-accent'}>.</span></h1>
                </Link>
                {/*desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=stephennguyendev97@gmail.com&su=Chủ đề&body=Nội dung"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>{t('button')}</Button>
                    </a>
                </div>

                {/*mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}