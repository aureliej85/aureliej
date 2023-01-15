import React from "react";
import "./aboutMe.scss";
import data from "../data";
import { Button } from "@mui/material";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { useState } from "react";

function AboutMe() {

  const [newClass, setNewClass] = useState("more hide");
  const [textButton, setTextButton] = useState("Voir plus");

  function handleClass(){
    newClass === "more hide" ? setNewClass("more show")  : setNewClass("more hide");
    newClass == "more hide" ? setTextButton("Voir moins") : setTextButton("Voir plus");
  }

 
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="aboutMe__text" id="aboutMe__text">
       
        Je suis Aurélie Josephine, développeuse web et mobile, passionnée depuis toujours par les nouvelles technologies et le monde du web. Depuis 2019, je me consacre totalement aux missions qui ont trait au développement d'applications et au référencement naturel. J'ai pu réaliser plus d'une trentaine de projets, ce qui m'a permis d'améliorer mes compétences techniques (JS, Frameworks etc.), faire face aux situations d'imprévues et prendre en main la gestion de projets. 
      </div>

      <div className="aboutMe__button"><Button onClick={handleClass}>{textButton}</Button></div>

      <div className={newClass}>
      J'ai également pris le temps d' approfondir mes connaissances grâce aux formations certifiantes OpenClassrooms et également suivi de nombreux MOOCs dont FreeCodeCamp. La veille technologique fait partie de mon quotidien et me permet d'anticiper les innovations et d'apprendre en continue. Durant plus de 15 ans, j'ai alterné les projets (sites internet, applications) et plusieurs emplois dans différents secteurs d'activités (banque, support clients etc.). L'experience professionnelle acquise ces années, m'a donnée les clés nécéssaires pour mener à bien mes missions, et je souhaite maintenant vous en faire bénéficier.
      </div>
      
    </div>
  );
}

export default AboutMe;
