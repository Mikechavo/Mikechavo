import React from 'react';
import '../App.css';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import emailLogo from '../icons/emailLogo.png';

const ContactMe = () => {
  return (
  <section id="Contact">
    <p>Contact Me:</p>
    
      
        <div className="email-icon">
          <a href="mailto:mchavez76@yahoo.com">
            <img src={emailLogo} alt="Email" className="icon-logo" />
          </a>
       
      
      <a href="https://github.com/Mikechavo"><img src={github} alt="GitHub" className="icon-logo" /></a>
      
        <a href="https://www.linkedin.com/in/michael-t-chavez/"><img src={linkedin} alt="LinkedIn" className="icon-logo" /></a>
      
      </div>
   
    
  </section>
  )
}

export default ContactMe;