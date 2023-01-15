import React, { useEffect, useState } from 'react';
import "./blog.scss";
import MyCards from '../Components/MyCards';

function Blog() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        fetch("https://85media.fr/wp-json/wp/v2/posts")
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then((dataResponse) => {
        console.log(dataResponse);
        console.table(dataResponse.id);
        setArticles(dataResponse);
      })
      .catch(function (err) {
        console.log("Une erreur est survenue: " + err);
      });

    }, [])

  return (
    <div className="blog" id="blog">
      <div className="blog__title">Le Blog</div>
      <div className='blog__descr'>
          Vous trouverez ci-dessous les 10 derniers articles de mon site 85media.fr.
        </div>
      <div className="blog__cards">
        {articles.map((elt) => (
            <MyCards key={elt.id} title={elt.title.rendered} cover={elt.yoast_head_json.og_image[0].url} id={elt.id} link={elt.link} />
          ))}
      </div>
        
    </div>
  )
}

export default Blog