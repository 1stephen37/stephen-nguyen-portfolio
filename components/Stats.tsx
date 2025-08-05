'use client';
import CountUp from "react-countup";
import {usePathname} from "next/navigation";

const stats = [
    {
        num: 3,
        text: "Years of learning experience",
        vText: "Năm học tập",
    },
    {
        num: 2,
        text: "Project completed",
        vText: "Dự án hoàn thành",
    },
    {
        num: 4,
        text: "Technologies mastered",
        vText: "Công nghệ thành thạo",
    },
    {
        num: 1400,
        text: "Code commits",
        vText: "Lần cập nhật mã nguồn",
    }
]

export default function Stats() {
    const pathname = usePathname();

    const parts = pathname.split('/');
    const locale = parts[1] || 'vi';

    return (
        <section className={'pt-4 pb-12 xl:pt-0 xl:pb-0'}>
            <div className="container">
                <div className={'flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'}>
                    {stats.map((stat,index) => (
                        <div key={index} className={'flex-1 flex gap-4 items-center justify-center xl:justify-start'}>
                            <CountUp end={stat.num} duration={5} delay={2} className={'text-4xl xl:text-6xl font-extrabold'}/>
                            <p className={`${stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}>{locale === 'vi' ? stat.vText : stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}