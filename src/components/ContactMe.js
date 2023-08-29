import React from 'react';
import '../App.css';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import emailLogo from '../icons/emailLogo.png';

const ContactMe = () => {
  return (<section id="Contact">
    <p>You can reach out to me via:</p>
    <ul>
      <p>
        <div className="email-icon">
          <a href="mailto:mchavez76@yahoo.com">
            <img src={emailLogo} alt="Email" className="icon-logo" />
          </a>
        </div>
      </p>
      <a href="https://github.com/Mikechavo"><img src={github} alt="GitHub" className="icon-logo" /></a>
      <p>
        <a href="https://www.linkedin.com/in/michael-t-chavez/"><img src={linkedin} alt="LinkedIn" className="icon-logo" /></a>
      </p>
    </ul>
  </section>
  )
}

export default ContactMe;