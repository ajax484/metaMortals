import React from 'react';
import { countdown, countdownBrands1, countdownBrands2 } from '../Assets/Img';

export default function Countdown() {
    return (
        <section className="relative h-screen bg-gray-800">
            <img src={countdown} className="h-1/2 w-full md:h-3/4 md:w-3/4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" alt="" />
            <img src={countdownBrands1} className="h-8 w-full absolute top-[65%] md:top-[80%] left-1/2 -translate-y-1/2 -translate-x-1/2" alt="" />
            <img src={countdownBrands2} className="h-8 w-full absolute top-[calc(65%+4.25rem)] md:top-[calc(80%+4.25rem)] left-1/2 -translate-y-1/2 -translate-x-1/2" alt="" />
        </section>
    )
}
