'use client';

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSliderBtn({ containerStyles, btnStyles, iconStyles }: {
    containerStyles: string,
    btnStyles: string,
    iconStyles: string
}) {
    const swiper = useSwiper();

    const handlePrevClick = () => {
        const currentIndex = swiper.activeIndex;

        if (currentIndex === 0) {
            swiper.slideTo(swiper.slides.length - 1); // Nếu đang ở slide đầu tiên, quay về slide cuối
        } else {
            swiper.slidePrev(); // Nếu không, quay về slide trước
        }
    };

    const handleNextClick = () => {
        const currentIndex = swiper.activeIndex;

        if (currentIndex === swiper.slides.length - 1) {
            swiper.slideTo(0); // Nếu đang ở slide cuối, quay về slide đầu tiên
        } else {
            swiper.slideNext(); // Nếu không, quay tới slide tiếp theo
        }
    };

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={handlePrevClick}>
                <PiCaretLeftBold className={iconStyles} />
            </button>

            <button className={btnStyles} onClick={handleNextClick}>
                <PiCaretRightBold className={iconStyles} />
            </button>
        </div>
    );
}