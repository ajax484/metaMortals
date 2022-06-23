import React, { useState } from 'react';
import Hero from './Hero';
import Countdown from './Countdown';
import Features from './Features';
import Roadmap from './Roadmap';
import MailingList from './MailingList';
import Presale from './Presale';
import PopUp from './PopUp';


export default function Home() {
  const [popupIsOpen, setpopupIsOpen] = useState(true);

  const popupHandler = () => setpopupIsOpen(prevState => !prevState)

  return (
    <main className={`${popupIsOpen ? 'h-screen overflow-hidden' : 'overflow-auto'}`}>
      <Hero />
      <Countdown />
      <Features />
      <Roadmap />
      <MailingList />
      <Presale />
      <PopUp state={popupIsOpen} handler={popupHandler}/>
    </main>
  )
}
