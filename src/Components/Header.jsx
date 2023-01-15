import React from 'react';
import Button from '@mui/material/Button';
import PanToolIcon from '@mui/icons-material/PanTool';
import "./header.scss";
import MyDrawer from './MyDrawer';
import Theme from '../Styles/Theme';
import { Link } from "react-router-dom";
import scrollTo from 'gatsby-plugin-smoothscroll';

function Header() {
  return (
    <div className='header'>
        <div className='header__image'>
            <img src="NOIRtransp.png" alt="youpi" />
        </div>
        <div className='header__menu'>
            <ul>
                <li><button onClick={() => scrollTo('#aboutMe')}>A Propos</button></li>
                <li><button onClick={() => scrollTo('#services')}>Services & Compétences</button></li>
                <li><button onClick={() => scrollTo('#aboutMe')}>Formation & Expérience</button></li>
                <li><button onClick={() => scrollTo('#portfolio')}>Projets</button></li>
                <li><button onClick={() => scrollTo('#blog')}>Blog</button></li>
            </ul>
        </div>
        <div className='header__cta__btn'>
            <Button className='header__cta__button' onClick={() => scrollTo('#contact')} variant="contained" style={Theme.palette.buttonRed} endIcon={<PanToolIcon />}>
                Contactez-moi
            </Button>
        </div>
        <div className='header__cta__dwr'>

            <MyDrawer className='header__cta__drawer' style={Theme.palette.companyRed}/>
        </div>
        
    </div>
  )
}

export default Header