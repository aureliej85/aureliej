import React from 'react';
import { Link } from 'react-router-dom';
import "./myCards.scss";

function MyCards({title, cover, id, link}) {
  return (
    
    <a href={link} className="linkCard" rel="noopener" target="_blank">
    <article className="card">
      <img className="card__picFill" src={cover} alt={title} />
      {/* <span className="card__title">{title}</span> */}
    </article>
  </a>
  )
}

export default MyCards