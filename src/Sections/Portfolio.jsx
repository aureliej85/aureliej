import React from 'react';
import MyCarousel from '../Components/MyCarousel';
import "./portfolio.scss";

function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">
        <div className='portfolio__title'>Projets</div>
        <div className='portfolio__descr'>
          <span>
            Panel de quelques projets sur lesquels j'ai travaillé (sites internet et applications mobiles).
          </span>
          <span>
            Cliquez sur les images pour avoir plus d'informations.
          </span>
        </div>
        <div className='portfolio__carousel'><MyCarousel /></div>
    </div>
  )
}

export default Portfolio