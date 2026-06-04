import type {Metadata} from "next";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from 'next/navigation';
import {JetBrains_Mono} from "next/font/google";
import {routing} from '@/i18n/routing';
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import "../globals.css";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "700", "800"],
    variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
    title: "Stephen Nguyen Portfolio",
    description: "Stephen Nguyen Portfolio",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
        <body className={jetbrainsMono.variable}>
        <NextIntlClientProvider messages={messages}>
            <Header/>
            <StairTransition/>
            <PageTransition>
                {children}
            </PageTransition>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
