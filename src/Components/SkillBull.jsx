import React from 'react';
import './skillBull.scss';

function SkillBull({logo, title, color}) {
    const divStyle = {
        backgroundColor: color,
      };

  return (
    <div className='skillBullDiv'>
        <div className='skillBull' style={divStyle}>
        <img src={logo} className='skillBull__img'/>
        </div>
        <span className='skillBull__title'>{title}</span>
    </div>
    
  )
}

export default SkillBull