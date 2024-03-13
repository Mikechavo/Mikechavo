import React from 'react'
import '../App.css';
import github from '../icons/github.png';
import js_logo from '../icons/js_logo.png';
import react_logo from '../icons/react_logo.png';
import rails_logo from '../icons/rails_logo.png';
import css_logo from '../icons/css_logo.png';
import html_logo from '../icons/html_logo.png';
import sql_logo from '../icons/sql_logo.png';
import gas_logo from '../icons/gas_logo.png';
import c_logo from '../icons/c_logo.png';
import ruby_logo from '../icons/ruby_logo.png';
import jest_logo from '../icons/jest_logo.png';
import rspec_logo from '../icons/rspec_logo.png';
import jquery from '../icons/jquery.png';
import Postgresql from '../icons/Postgresql.png';
import haml from '../icons/haml.png';
import python_logo from '../icons/python-logo.png';
import flask from '../icons/flask.png';
import bootstrap from '../icons/bootstrap.png';
import django from '../icons/django.png';
import java from '../icons/java.png';
import pytorch from '../icons/pytorch.png';
import stableDiffusion from '../icons/stableDiffusion.webp';


const Skill = () => {
  return (

    <div className="container">
      <div className="Skills">


        <div border="1">
          <img src={js_logo}></img>
          <img src={jquery}></img>
          <img src={react_logo}></img>
          <img src={bootstrap}></img>
        </div>

        <div border="1">
          <img src={python_logo}></img>
          <img src={flask}></img>
          <img src={django}></img>
          <img src={pytorch}></img>
        </div>

        <div border="1">
          <img src={ruby_logo}></img>
          <img src={rails_logo}></img>
          <img src={java}></img>
          <img src={c_logo}></img>
        </div>

        <div border="1">
          <img src={Postgresql}></img>
          <img src={sql_logo}></img>
          <img src={html_logo}></img>
          <img src={css_logo}></img>
        </div>
        <div border="1">
          <img src={haml}></img>
          <img src={jest_logo}></img>
          <img src={rspec_logo}></img>
          <img src={gas_logo}></img>
        </div>

        <div border="1">
          <img src={github}></img>
        </div>

        <div className='bigskill'>
          <img src={stableDiffusion}></img>
        </div>

      </div>
      {/* <img id="myimage" src="https://mikechavo.carrd.co/assets/images/image02.jpg?v=8cf942e5" alt="AI picture of me"></img> */}
    </div>
    
  )
}

export default Skill;