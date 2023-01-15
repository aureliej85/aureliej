import React from 'react'
import "./hero.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import Theme from '../Styles/Theme';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Button } from '@mui/material';

function Hero() {
  return (
    <div className='hero' id="hero">

      <div className='hero__descr'>
        <span className='hero__descr__name'>
          Aurélie JOSEPHINE
        </span>
        <h1 className='hero__descr__job'>Développeuse Web et Mobile</h1>
        <span className='hero__descr__details'>
          <span>JavaScript, HTML5, CSS 3, React Js,</span>
          <span>React Native, Node JS, FireBase,</span>
          <span>MySQL, MongoDB, WordPress</span>
        </span>
        <div className="hero__descr__social"> 
            <a href="https://github.com/aureliej85" rel="noopener" target="_blank" >
              <GitHubIcon style={Theme.palette.companyWhite} fontSize="medium" sx={{marginRight:"15px"}}/>
            </a>
            <a href="https://www.linkedin.com/in/aurelie-josephine" rel="noopener" target="_blank" >
              <LinkedInIcon style={Theme.palette.companyWhite} fontSize="medium" sx={{marginRight:"15px"}}/>
            </a>
            <a href="https://85media.fr" rel="noopener" target="_blank" >
              <LanguageIcon style={Theme.palette.companyWhite} fontSize="medium"/>
            </a>   
        </div>
        <div className="hero__descr__contact">
          <Button variant="outlined" style={Theme.palette.primary} onClick={() => scrollTo('#contact')}> Contact</Button>
        </div>
      </div>
        
      <div className='hero__img'>
        <img src="aurelie-josephine-pic-min.png" className='hero__img__desk'/>
        <img src="aurelie-josephine-pic-mobile.png" className='hero__img__mobile'/>
      </div>
      
    </div>
  )
}

export default Hero