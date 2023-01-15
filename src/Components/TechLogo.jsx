import "./techLogo.scss";


function TechLogo({techName}) {

  
  return (
    <div className="techLogo">
   
        { techName === "WordPress" ?<img src="wordpress-logo.png" alt={techName} className="techLogo__img"/> :
         techName === "CSS" ? <img src="css-logo.png" className="techLogo__img"/> : 
         techName === "React JS" ? <img src="logo192.png" className="techLogo__img"/> : 
         techName === "React Native" ? <img src="reactNative-logo.png" className="techLogo__img"/> :
         techName === "Java" ? <img src="java-logo.png" className="techLogo__img"/> : 
         techName === "JavaScript" ? <img src="js-logo.png" className="techLogo__img"/> : 
         techName === "Swift" ? <img src="swift-logo.png" className="techLogo__img"/> : 
         techName === "Node JS" ? <img src="nodejs-logo.png" className="techLogo__img"/> : 
         techName === "PHP" ? <img src="php-logo.png" className="techLogo__img"/> :
         techName === "SASS" ? <img src="sass-logo.png" className="techLogo__img"/> :
         techName === "MongoDB" ? <img src="mongoDb-logo.png" className="techLogo__img"/> :
         techName === "API Rest" ? <img src="apiRest-logo.png" className="techLogo__img"/> :
         techName === "SQlite" ? <img src="sqlite-logo.png" className="techLogo__img"/> :
         techName === "Firebase" ? <img src="firebase-logo.svg" className="techLogo__img"/> : null
 
        }
    </div>
  )
}

export default TechLogo