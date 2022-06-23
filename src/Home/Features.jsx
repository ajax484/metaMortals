import React from 'react';
import { ellipse1, ellipse2, features1, features2, features3, rock1, rock2, rock3, sword1, sword2 } from '../Assets/Img';

export default function Features() {
    return (
        <section className="relative h-fit md:h-screen bg-gray-900 py-24 md:py-0 overflow-hidden">
            <img src={sword1} className="h-64 w-64 md:h-72 md:w-72 absolute top-[25%] md:top-[40%] -left-[80px] md:-left-4 -translate-y-1/2" alt="" />
            <img src={sword2} className="h-64 w-64 md:h-72 md:w-72 absolute top-[88%] md:top-[75%] -right-[100px] md:right-[5%] -translate-y-1/2" alt="" />
            <img src={rock1} className="h-8 w-8 md:h-10 md:w-10 absolute top-[10%] md:top-1/4 right-[15%] md:right-[20%] -translate-y-1/2" alt="" />
            <img src={rock2} className="z-30 h-12 w-12 md:h-16 md:w-16 absolute top-[95%] md:top-[85%] left-[15%] md:left-[20%] -translate-y-1/2" alt="" />
            <img src={rock3} className="h-10 w-10 absolute top-3/4 right-[20%] -translate-y-1/2" alt="" />
            <img src={ellipse1} className="h-[90%] w-2/12 absolute top-1/2 right-0 -translate-y-1/2 " alt="glowing ellipse" />
            <img src={ellipse2} className="h-[90%] w-2/12 absolute top-1/2 left-0 -translate-y-1/2 " alt="glowing ellipse" />

            <div className="z-20 relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-white w-full space-y-4 md:space-y-8">
                <h2 className="text-2xl md:text-5xl text-center">
                    Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-4/5 mx-auto text-sm md:text-base">
                    <div className="gradient-background p-1 h-fit">
                        <div className="gradient-body px-4 py-8 space-y-6 md:space-y-8">
                            <img src={features1} className="h-8 w-8" alt="" />
                            <p>
                                Blockchain and automated smart contracts are at the heart of our main technologies.
                            </p>
                        </div>
                    </div>
                    <div className="gradient-background p-1 h-fit">
                    <div className="gradient-body px-4 py-8 space-y-6 md:space-y-8">
                            <img src={features2} className="h-8 w-8" alt="" />
                            <p>
                                Through numerous incentive and reward programs to encourage successful producers, dealers, and consumers, the Metamortals ecosystem and Marketplace will be exclusively focused on rewarding early adopters for their important contributions.
                            </p>
                        </div>
                    </div>
                    <div className="gradient-background p-1 h-fit">
                    <div className="gradient-body px-4 py-8 space-y-6 md:space-y-8">
                            <img src={features3} className="h-8 w-10" alt="" />
                            <p>
                                We are dedicated to making these fees the most affordable you have ever encountered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
