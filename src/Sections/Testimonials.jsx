import React from 'react';
import "./testimonials.scss";
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Testimonials() {
  return (
    <div className='testimonials__bloc' id="testimonials">
        <div className="testimonials__bloc__title">Ce que les gens disent</div>
        <div className='testimonials__bloc__descr'>
          <p>Voici quelques retours et avis concernant les projets sur lesquels j'ai travaillé.</p>
          <p><a href="https://g.page/r/CRiDUtrpOivyEBM/review" rel="noopener" target="_blank" >Voir les avis sur Google</a></p>
        </div>
        
        <div className="testimonials">

            <article className="testimonials__citation">
                <div className="testimonials__citation__header">
                    <Avatar alt="Pascaline Kamokoué" src="kamokoue.png" />
                    <span>Pascaline Kamokoué</span>
                </div>
                <div className="testimonials__citation__content">        
                    <img src="fiveStars.png" className="testimonials__citation__content__stars"/>          
                    <span>On me l'a recommandée il y a plus d'un an. Depuis le premier contact, une relation de co-construction s'est mise en place. Elle travaille avec cœur, passion et professionnalisme. Tous les sites de mon entreprise sont depuis lors créé et géré par elle. Merci 🙏</span>
                </div>
            </article>

            <article className="testimonials__citation">
                <div className="testimonials__citation__header">
                    <Avatar alt="Arielle Lemony" src="lemony.png" />
                    <span>Arielle Lemony</span>
                </div>
                <div className="testimonials__citation__content">        
                    <img src="fiveStars.png" className="testimonials__citation__content__stars"/>          
                    <span>Aurélie a mis à jour mon site internet et travaillé sur son référencement je la recommande sans hésitation pour sa disponibilité, sa pédagogie et les conseils judicieux prodigués</span>
                </div>
            </article>

            <article className="testimonials__citation">
                <div className="testimonials__citation__header">
                    <Avatar alt="Maxime Chantelles" src=" " />
                    <span>Maxime Chantelles</span>
                </div>
                <div className="testimonials__citation__content">        
                    <img src="fiveStars.png" className="testimonials__citation__content__stars"/>          
                    <span>Très très satisfait par la qualité des services fournis par 85media. Je n'hésite pas un seul instant à la recommander et d'ailleurs mes clients que je lui ai recommandé le sont également. Merci beaucoup 85media.</span>
                </div>
            </article>

            <article className="testimonials__citation">
                <div className="testimonials__citation__header">
                    <Avatar alt="Jonathan Yafu" src=" " />
                    <span>Jonathan Yafu</span>
                </div>
                <div className="testimonials__citation__content">        
                    <img src="fiveStars.png" className="testimonials__citation__content__stars"/>          
                    <span>Nous vous avons fait confiance et sommes très satisfaits du résultat. Nous vous recommanderons soyez-en sûr !!! A très bientôt !</span>
                </div>
            </article>

            <article className="testimonials__citation">
                <div className="testimonials__citation__header">
                    <Avatar alt="Maat Kem Productions" src="maatkem.png" />
                    <span>Maat Kem Productions</span>
                </div>
                <div className="testimonials__citation__content">        
                    <img src="fiveStars.png" className="testimonials__citation__content__stars"/>          
                    <span>Très à l ecoute du client et travail très professionnel.</span>
                </div>
            </article>

            <article className="testimonials__citation">
                <div className="testimonials__citation__header">
                    <Avatar alt="Milo VTC" src="milo.png" />
                    <span>Milo VTC</span>
                </div>
                <div className="testimonials__citation__content">        
                    <img src="fiveStars.png" className="testimonials__citation__content__stars"/>          
                    <span>J'ai toujours de bons retours concernant la fluidité de mes sites et applications. Je conseille vivement 85media à ceux désirant un service réactif et pro.</span>
                </div>
            </article>


        </div>
    </div>
  )
}

export default Testimonials