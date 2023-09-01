import React from 'react'
import '../App.css';
import github from '../icons/github.png';
import ai_image from '../icons/ai_image.jpg';
import linkedin from '../icons/linkedin.png';
import emailLogo from '../icons/emailLogo.png';


const HomePage = () => {
  return (

    <div className="home-page">
      <div class="background-animation"></div>
      <header className="App-header">

      {/* <section id="Contact"> */}
            <div className="email-icon">
              <a href="mailto:mchavez76@yahoo.com">
                <img src={emailLogo} alt="Email" className="icon-logo" />
              </a>
              <a href="https://github.com/Mikechavo"><img src={github} alt="GitHub" className="icon-logo" />
              </a>
              <a href="https://www.linkedin.com/in/michael-t-chavez/"><img src={linkedin} alt="LinkedIn" className="icon-logo" /></a>
            </div>
          {/* </section> */}
          <div >
          <h1>Hi. I'm Mike.</h1>
          <p>I'm a Full Stack Developer.</p>
        </div>

        {/* <a> */}
          <img src={ai_image} alt="AI picture of me"></img>
        {/* </a> */}

      </header>
    </div>
  )
}

export default HomePage;