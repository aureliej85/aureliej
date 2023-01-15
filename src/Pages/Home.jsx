import React from 'react';
import AboutMe from '../Sections/AboutMe';
import Blog from '../Sections/Blog';
import Hero from '../Sections/Hero'
import Portfolio from '../Sections/Portfolio';
import Services from '../Sections/Services';
import Skills from '../Sections/Skills';
import Testimonials from '../Sections/Testimonials';
import Fab from '@mui/material/Fab';
import Theme from '../Styles/Theme';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Contact from '../Sections/Contact';
import "./home.scss";


function Home() {
  return (
    <div className="homeDiv">
      <Hero />
      <AboutMe />
      <div className='servicesAndSkills' id="services">
        
          <div className='servicesAndSkills__title'>Services & Compétences</div>
          <div className='servicesAndSkills__descr'>
          Je propose mes services pour la création d'un nouveau projet ou pour intervenir sur des projets déjà existants.
          </div>
          <div className='servicesAndSkills__content'>
            <Services />
            <Skills />
          </div>
      
      </div>
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />

      <div className='fab'>
        <a href="https://wa.me/message/L2KRBLDU46ADH1" rel="noopener" target="_blank">
        <Fab style={Theme.palette.buttonGreen} aria-label="WhatsApp">
          <WhatsAppIcon />
        </Fab>
        </a>
      </div>
      

    </div>
  )
}

export default Home