import React from 'react';
import { homeBg, coin1, coin2, coin3, coin4, heroButton, heroImg, heroBrands } from '../Assets/Img';

export default function Hero() {
    return (
        <section className="h-screen relative overflow-hidden">
            <img src={homeBg} className="w-full h-screen absolute top-0 left-0" alt="" />
            <img src={heroImg} className="w-[500px] lg:w-[600px] h-72 lg:h-80 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" alt="" />
            <img src={coin1} className="w-32 lg:w-40 h-28 lg:h-36 absolute top-[calc(50%+80px)] left-[calc(50%-300px)] -translate-y-1/2 -translate-x-1/2" alt="" />
            <img src={coin2} className="w-32 lg:w-40 h-28 lg:h-36 absolute top-[calc(50%+80px)] left-[calc(50%+300px)] -translate-y-1/2 -translate-x-1/2" alt="" />
            <img src={coin3} className="w-16 lg:w-24 h-12 lg:h-16 absolute top-[calc(50%+110px)] lg:top-[calc(50%+150px)] left-[calc(50%-120px)] lg:left-[calc(50%-160px)] -translate-y-1/2 -translate-x-1/2" alt="" />
            <img src={coin4} className="w-16 lg:w-24 h-12 lg:h-16 absolute top-[calc(50%+120px)] lg:top-[calc(50%+160px)] left-[calc(50%+120px)] lg:left-[calc(50%+160px)] -translate-y-1/2 -translate-x-1/2" alt="" />
            <img src={heroButton} className="w-44 lg:w-48 h-16 lg:h-20 absolute top-[calc(50%+180px)] lg:top-[calc(50%+220px)] left-1/2 -translate-y-1/2 -translate-x-1/2" alt="" /> 
            <img src={heroBrands} className="w-full lg:w-3/4 h-6 lg:h-8 absolute top-[calc(100%-2rem-0.25rem)] left-1/2 -translate-x-1/2" alt="" /> 
        </section>
    )
}
