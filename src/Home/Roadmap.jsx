import React from 'react'
import { pillars1, pillars2, scroll } from '../Assets/Img'

export default function Roadmap() {
    return (
        <section className="relative bg-gray-800">
            <img src={pillars1} className="h-full absolute left-0" alt="" />
            <img src={pillars2} className="h-full absolute right-0" alt="" />

            <div className="text-white space-y-8 py-16 z-10 relative">
                <h2 className="text-2xl md:text-5xl text-center">
                    Metamortals: Our Roadmap
                </h2>

                <div className="overflow-x-scroll overflow-y-auto no-scrollbar text-black max-w-full">
                    <div className="flex flex-col items-center md:items-start md:flex-row gap-y-8 md:gap-y-0 md:gap-x-16 w-full md:w-max">
                        <div className="h-[400px] w-[400px] md:h-[400px] md:w-[700px] relative">
                            <img src={scroll} className="w-full h-full" alt="" />
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-4">
                                <h3 className="text-2xl md:text-4xl text-center">Phase 1</h3>
                                <ul className="list-disc text-sm md:text-base">
                                    <li>
                                        Create Metamortals' web functionalities
                                    </li>
                                    <li>
                                        Begin IDO marketing
                                    </li>
                                    <li>
                                        Launchpad Listing
                                    </li>
                                    <li>
                                        Dex listing Pancakeswap
                                    </li>
                                    <li>
                                        CoinGecko, CoinMarketCap submission
                                    </li>
                                    <li>
                                        Audit
                                    </li>
                                    <li>
                                        Treasury Corporate Accounts
                                    </li>
                                    <li>
                                        Create a Community Blog
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-[400px] w-[400px] md:h-[450px] md:w-[700px] relative">
                            <img src={scroll} className="w-full h-full" alt="" />
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-4">
                                <h3 className="text-2xl md:text-4xl text-center">Phase 2</h3>
                                <ul className="list-disc text-sm md:text-base">
                                    <li>
                                        Announce partnerships
                                    </li>
                                    <li>
                                        Announce the development team that will be building on Metamortals.
                                    </li>
                                    <li>
                                        Launch Marketing Campaigns

                                    </li>
                                    <li>
                                        Develop website utility
                                    </li>
                                    <li>
                                        Integrate on-ramp payments
                                    </li>
                                    <li>
                                        Develop the decentralized exchange, yield farming features, and so on.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-[400px] w-[400px] md:h-[500px] md:w-[700px] relative">
                            <img src={scroll} className="w-full h-full" alt="" />
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-4">
                                <h3 className="text-2xl md:text-4xl text-center">Phase 3</h3>
                                <ul className="list-disc text-sm md:text-base">
                                    <li>
                                        Staking Rewards Platform
                                    </li>
                                    <li>
                                        List on major exchanges
                                    </li>
                                    <li>
                                        Gaming development
                                    </li>
                                    <li>
                                        Create the Decentralized Autonomous Organization
                                    </li>
                                    <li>
                                        Hackathon and Sponsorships
                                    </li>
                                    <li>
                                        Payment integrations
                                    </li>
                                    <li>
                                        Launch the test net of the game
                                    </li>
                                    <li>
                                        Release trailer of the game
                                    </li>
                                    <li>
                                        Launch the game main net
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
