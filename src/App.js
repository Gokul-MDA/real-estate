import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from "./components/Navbar"
import GlobalStyle from './globalStyles';
import { SliderData } from "./data/SliderData";
import InfoSection from './components/InfoSection';
import { InfoData, InfoDataTwo } from './data/InfoData';
import Dropdown from './components/Dropdown';
import ViewSection from './components/ViewSection';
import { ViewData } from './data/ViewData'
import InfoSection2 from './components/InfoSection2'
import InteriorSection from './components/InteriorSection';
import { InteriorData } from './data/InteriorData';
import FooterSection from './components/FooterSection';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData}/>
      <ViewSection {...ViewData}/>
      <InteriorSection {...InteriorData}/>
      <InfoSection2 {...InfoDataTwo}/>
      <FooterSection />
    </>
  );
}

export default App;
