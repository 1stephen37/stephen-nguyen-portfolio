'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {cn} from '@/lib/utils';

const localeLabels: Record<string, string> = {
    en: 'EN',
    vi: 'VI',
};

export default function LanguageSwitcher({
    className,
    compact = false,
}: {
    className?: string;
    compact?: boolean;
}) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('nav');

    const onSwitch = (nextLocale: string) => {
        if (nextLocale !== locale) {
            router.replace(pathname, {locale: nextLocale});
        }
    };

    return (
        <div
            role="group"
            aria-label={t('switchLanguage')}
            className={cn('flex items-center rounded-full border border-accent/30 p-1', className)}
        >
            {routing.locales.map((loc) => (
                <button
                    key={loc}
                    type="button"
                    onClick={() => onSwitch(loc)}
                    aria-pressed={locale === loc}
                    className={cn(
                        compact
                            ? 'min-w-[36px] h-8 px-2 text-xs'
                            : 'min-w-[44px] h-9 px-3 text-sm',
                        'rounded-full font-semibold uppercase transition-all duration-300',
                        locale === loc
                            ? 'bg-accent text-primary'
                            : 'text-white/70 hover:text-accent'
                    )}
                >
                    {localeLabels[loc]}
                </button>
            ))}
        </div>
    );
}
