import React from 'react';
import SkillBull from '../Components/SkillBull';
import './skills.scss';


function Skills() {
    const mySkills = 
    [{
        title: "React JS",
        logo : "logo192.png",
        color: "#d1f8fd",
        id: 1
    }, {
        title: "React Native",
        logo : "logo192.png",
        color: "#d1f8fd",
        id: 2

    },
    {
        title: "Node JS",
        logo : "nodejs-logo.png",
        color: "#effbd0",
        id: 3

    }, {
        title: "Firebase",
        logo : "firebase-logo.svg",
        color: "#ffde00",
        id: 4

    },
    {
        title: "HTML 5",
        logo : "html-logo.png",
        color: "orange",
        id: 5

    },
    {
        title: "CSS 3",
        logo : "css-logo.png",
        color: "blue",
        id: 6

    }, {
        title: "SASS",
        logo : "sass-logo.png",
        color: "pink",
        id: 7

    }, {
        title: "KOTLIN",
        logo : "kotlin-logo.png",
        color: "purple",
        id: 8

    },{
        title: "WordPress",
        logo : "wordpress-logo.png",
        color: "#DEF5FE",
        id: 9

    }]
  return (
    <div>
        <div className="allSkills">
            { mySkills.map((elt)=> <SkillBull logo={elt.logo} title={elt.title} color={elt.color} key={elt.id}/>)}
        </div>
    </div>
   
  )
}

export default Skills