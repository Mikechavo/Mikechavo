import React from 'react';
import arrow from '../icons/arrow.png';
import army_image from '../icons/army_image.jpg';
import '../App.css';
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap"
import uber from '../icons/uber.png';
import Learn_academy from '../icons/Learn_academy.png';

const Journey = () => {
  return (

    <section >
       <u><h1>My Software Development Journey</h1></u>
       <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          
          {/* <CardBody>
           
          </CardBody> */}
          <CardBody>
            <CardText>
            I started my career studying Computer Science back in 2017 when I was in the US Army. The first time I really implemented code was when I worked at Uber as a Technical Sourcer, I built automation tools with Google Apps Script.
            </CardText>
          </CardBody>
        </Card>
      </div>

    
      <br />

      <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
      <br />
      <br />
      <u><h2>University of Maryland Global Campus</h2></u>
      <p>2017 - 2018</p>
      <img id="myimage" src={army_image} alt="Army picture of me"></img>
      <br/>
      <br/>
      <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          <CardBody>
            <CardText>
              I started studying Computer Science at the University of Maryland Global Campus while serving in the US Army. This is where I started learning C and C++.
            </CardText>
          </CardBody>
        </Card>
      </div>
      <br />
      <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
      <br/>
      <br/>

      <u><h2>Uber</h2></u>
      <p>2021 - 2023</p>
      <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          {/* <CardBody>
           
          </CardBody> */}
          <CardBody>
            <CardText>
            This is where I finally got introduced into the tech industry and taught myself Google App’s Script(HTML & JavaScript). Though coding wasn’t a part of my Job description as Sourcer, I wanted to make things easier with automation for my organization. Using Google Sheets, LinkedIn, Beamery and internal dashboards I was able to create multiple automation tools for different use cases.
            </CardText>
          </CardBody>
        </Card>
      </div>
      <br />

      <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
<br/>
<br/>

<u><h2>LEARN Academy</h2></u>
      <p>2021 - 2023</p>
      <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          {/* <CardBody>
          
          </CardBody> */}
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