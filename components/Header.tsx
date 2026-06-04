import {Link} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';

import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {useTranslations} from "next-intl";

export default function Header() {
    const t = useTranslations('index');

    return (
        <header className="py-6 sm:py-8 xl:py-12">
            <div className="container flex items-center gap-4">
                <Link href="/" className="shrink-0">
                    <h1 className="text-2xl sm:text-3xl xl:text-4xl font-semibold">
                        Stephen<span className="text-accent">.</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex flex-1 justify-center min-w-0">
                    <Nav/>
                </div>

                <div className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
                    <LanguageSwitcher/>
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=stephennguyendev97@gmail.com&su=Chủ đề&body=Nội dung"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="whitespace-nowrap">{t('button')}</Button>
                    </a>
                </div>

                <div className="xl:hidden flex items-center gap-2 sm:gap-4 shrink-0 ml-auto">
                    <LanguageSwitcher compact/>
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
}
