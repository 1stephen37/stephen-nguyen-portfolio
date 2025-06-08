import {Button} from '@/components/ui/button';
import {FiDownload} from 'react-icons/fi';
import Social from "@/components/Social";
import Photo from '@/components/Photo';
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <section className={'h-full'}>
            <div className="container">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className={'text-xl'}>Software Developer</span>
                        <h1 className={'h1 mb-6'}>Hello {`I'm`} <br/> <span
                            className={'text-accent'}>Stephen Nguyen</span></h1>
                        <p className={'max-w-[500px] mb-9 text-white/80'}>
                            I’m a fresh graduate in Software Engineering with 3 years of study and a 4-month internship.
                            I build responsive, user-friendly interfaces using React and Next.js, and handle backend logic with Express.js and Laravel.
                            Passionate about clean code, modern tech, and building meaningful digital experiences.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button variant={'outline'} size={'lg'} className={'uppercase flex items-center gap-2'}>
                                <span>Download CV</span>
                                <FiDownload className={'text-xl'}/>
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social containerStyles={'flex gap-6 '}
                                        iconStyles={'w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'order-1 xl:order-none mb-8 xl:mb-0'}>
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
}
