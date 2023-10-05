import React from 'react';
import arrow from '../icons/arrow.png';
import army_image from '../icons/army_image.jpg';
import '../App.css';
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap"

const Journey = () => {
  return (

    <section >
      <div >
        <u><h1>My Software Development Journey</h1></u>
      </div>

      <p>I started my career studying Computer Science back in 2017</p>
      <p>The first time I really implemented code was when I worked at Uber as Technical Sourcer, I built automation tools with Google Apps Script.</p>
      <br />

      <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
{/* 
        <Card style ={{width: '50rem'}}>
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
          </CardBody>
          <img
            alt="Card cap"
            src="https://picsum.photos/318/180"
            width="100%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            </CardBody>
</Card> */}
          
          <u><h2>University of Maryland Global Campus</h2></u>
          <h4>2017 - 2018</h4>
          <img id="myimage" src={army_image} alt="Army picture of me"></img>
          <p>I started studying Computer Science at University of Maryland Global Campus while serving in the US Army. This where I started learning C and C++.</p>
          <br />

          <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
          <u><h2>Uber</h2></u>
          <h4>2021 - 2023</h4>
          <p>This is where I finally got introduced into the tech industry and taught myself Google App’s Script(HTML & JavaScript). Though coding wasn’t part of my Job description as Sourcer I wanted to make things easier with automation for my organization. Using Google Sheets, LinkedIn, Beamery and internal dashboards I was to create multiple automation tools for different use cases.</p>
          <br />

          <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
          <u><h2>LEARN Academy</h2></u>
          <h4>2023</h4>
          <p>I wanted to have more structure to the learning process of Software Development so I enrolled into LEARN’s Fullstack development bootcamp.</p>

        </section>
        )
}

        export default Journey;