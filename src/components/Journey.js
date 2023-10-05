import React from 'react';
import arrow from '../icons/arrow.png';
import army_image from '../icons/army_image.jpg';
import '../App.css';
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap"

const Journey = () => {
  return (

    <section >
       <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          <CardBody>
            <CardTitle tag="h1">
            My Software Development Journey
            </CardTitle>
          </CardBody>
          <CardBody>
           {/*  */}
          </CardBody>
          <CardBody>
            <CardText>
            I started my career studying Computer Science back in 2017 bootcamp. The first time I really implemented code was when I worked at Uber as Technical Sourcer, I built automation tools with Google Apps Script.
            </CardText>
          </CardBody>
        </Card>
      </div>

    
      <br />

      <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
      <br />
      <br />
      <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          <CardBody>
            <CardTitle tag="h2">
              University of Maryland Global Campus
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              2017 - 2018
            </CardSubtitle>
          </CardBody>
          <CardBody>
            <img id="myimage" src={army_image} alt="Army picture of me"></img>
          </CardBody>
          <CardBody>
            <CardText>
              I started studying Computer Science at University of Maryland Global Campus while serving in the US Army. This where I started learning C and C++.
            </CardText>
          </CardBody>
        </Card>
      </div>
      <br />
      <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
      <br/>
      <br/>

      <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          <CardBody>
            <CardTitle tag="h2">
            Uber
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            2021 - 2023
            </CardSubtitle>
          </CardBody>
          <CardBody>
           {/*  */}
          </CardBody>
          <CardBody>
            <CardText>
            This is where I finally got introduced into the tech industry and taught myself Google App’s Script(HTML & JavaScript). Though coding wasn’t part of my Job description as Sourcer I wanted to make things easier with automation for my organization. Using Google Sheets, LinkedIn, Beamery and internal dashboards I was to create multiple automation tools for different use cases.
            </CardText>
          </CardBody>
        </Card>
      </div>
      <br />

      <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
<br/>
<br/>
      <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          <CardBody>
            <CardTitle tag="h2">
            LEARN Academy
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            2023
            </CardSubtitle>
          </CardBody>
          <CardBody>
           {/*  */}
          </CardBody>
          <CardBody>
            <CardText>
            I wanted to have more structure to the learning process of Software Development so I enrolled into LEARN’s Fullstack development bootcamp.
            </CardText>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export default Journey;