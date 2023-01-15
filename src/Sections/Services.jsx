import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import './services.scss';
import { DoubleArrow } from '@mui/icons-material';

function Services() {
  return (
    <div>
        
    <div className='services'>
        
        <article className='services__frontend'>
           
                <h3>Front-end</h3>
            <span>Je développe des applications et features Front-End avec React.JS, pour un Front-End SEO friendly.</span>

        </article>
        <article className='services__backend'>
            <h3>Back-end</h3>
            <span>À l'heure des projets dits "API First", je mets en place des projets Node.JS que vos applications Front-End ou mobiles puissent consommer</span>
            
            
        </article>
        <article className='services__mobile'>
            <h3>Mobile</h3>
            <span>Je développe des applications mobiles natives en JS (Android et iOS) avec React Native ou bien en Kotlin/Java pour les applications Android.</span>
                 
        </article>
        <article className='services__cms'>
            <h3>CMS</h3>
            <span>Grâce à WordPress, vous avez la possibilité de modifier vous-même le contenu de votre site sans demander à un développeur. Je mets en place un CMS Headless avec un Front-End.</span>
        </article>
    </div>

    </div>
   
  )
}

export default Services