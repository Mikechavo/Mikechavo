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

const Skill = () => {
  return (
   
    <section className="Skills">
     

      <div border="1">
        <img src={js_logo}></img>
        <img src={reactt_logo}></img>
        <img src={ruby_logo}></img>
        <img src={rails_logo}></img>
      </div>

      <div border="1">
        <img src={html_logo}></img>
        <img src={css_logo}></img>
        <img src={sql_logo}></img>
        <img src={gas_logo}></img>
      </div>

      <div border="1">
        <img src={c_logo}></img>
        <img src={github}></img>
      </div>
      {/* <img id="myimage" src="https://mikechavo.carrd.co/assets/images/image02.jpg?v=8cf942e5" alt="AI picture of me"></img> */}
    </section>
  )
}

export default Skill;