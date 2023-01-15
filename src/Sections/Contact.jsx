import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./contact.scss";


function Contact() {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [message, setMessage] = useState(" ");
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [msgError, setMsgError] = useState(false);

    function postMsg(){
      let details = {
        name: name,
        email: email,
        message: message,
      };

      fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name : details.name,
          email : details.email,
          message : details.message,
        }),
      })
      .then(async (responseProducts) => {
        try {
          let result = await responseProducts.json();
          console.log(result);
          setName(" ");
          setEmail(" ");
          setMessage(" ")
          document.getElementById("contactInfo").innerHTML="Votre message a bien été envoyé !"
        } catch (e) {
          console.log(e);
        }
      });


    }


  function handleSubmit (){
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
    
    if(!validEmail.test(email)){
      setEmailError(true)
    } else{
      setEmailError(false);
      postMsg();
    }
    }
   
  

  return (
    <div className="contact" id="contact">
        <div className="contact__title">
          <div className="contact__title__head">Contact </div>
          <div className='contact__title__descr'>
          N'hésitez pas à me joindre par email ou dès maintenant via WhatsApp.
        </div>
          <div className="contact__title__email">
            <EmailIcon /> 
            <span><a href="mailto:aurelie@85media.fr" rel="noopener" target="_blank">aurelie@85media.fr</a></span>
          </div>
          <div className="contact__title__email">
            <LocalPhoneIcon /> 
            <span><a href="https://call.whatsapp.com/voice/qRR8lOP1q6yGF895HFtEe9" rel="noopener" target="_blank">+33 07 49 55 34 13</a></span>
          </div>
          <div className="contact__title__info" id="contactInfo"></div>
        
        </div> 

        
    </div>
  )
}

export default Contact