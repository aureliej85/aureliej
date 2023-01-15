import React from 'react';
import "./footer.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import Theme from '../Styles/Theme';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__logo">
            <img src="NOIRtransp.png" />
        </div>
        <div className="footer__menu">
            <ul>
                <li>Mentions légales</li>
                <li>Comment allez-vous?</li>
                <li><a href="mailto:aurelie@85media.fr" rel="noopener" target="_blank">Contact</a></li>
            </ul>
        </div>
        <div className="footer__right"> 
            <GitHubIcon style={Theme.palette.companyWhite} fontSize="medium"/>
            <LinkedInIcon style={Theme.palette.companyWhite} fontSize="medium"/>
            <LanguageIcon style={Theme.palette.companyWhite} fontSize="medium"/>
            
        </div>
    </div>
  )
}

export default Footer