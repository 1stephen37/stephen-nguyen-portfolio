import type {Metadata} from "next";
import React from "react";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "700", "800"],
    variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
    title: "Stephen Nguyen Portfolio",
    description: "Stephen Nguyen Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>
            {children}
        </PageTransition>
        </body>
        </html>
    );
}
