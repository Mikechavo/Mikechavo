import React from 'react'
import '../App.css';
import github from '../icons/github.png';
import js_logo from '../icons/js_logo.png';
import reactt_logo from '../icons/reactt_logo.png';
import rails_logo from '../icons/rails_logo.png';
import css_logo from '../icons/css_logo.png';
import html_logo from '../icons/html_logo.png';
import sql_logo from '../icons/sql_logo.png';
import gas_logo from '../icons/gas_logo.png';
import c_logo from '../icons/c_logo.png';
import ruby_logo from '../icons/ruby_logo.jpeg';
import ai_image from '../icons/ai_image.jpg';
import ContactMe from '../components/ContactMe';


const HomePage = () => {
  return (

    <div className="home-page">
       <div class="background-animation"></div>
       <header className="App-header">

        
      
        

        <a>
          <img id="myimage" src={ai_image} alt="AI picture of me"></img>
        </a>
        <div >
        <h1>Hi. I'm Mike.</h1>
      <h1>I'm a Full Stack Developer</h1>
      <ContactMe />
      </div>
      </header>
    </div>
  )
}

export default HomePage;