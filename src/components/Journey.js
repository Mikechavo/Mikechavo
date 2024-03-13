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
      <br />
      <br />
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
      <br />
      <br />

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
      <br />
      <br />

      <u><h2>LEARN Academy</h2></u>
      <p>2023 - 2023</p>
      <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          {/* <CardBody>
          
          </CardBody> */}
          <CardBody>
            <CardText>
              I wanted to have more structure to the learning process of Software Development so I enrolled into LEARN’s Fullstack development bootcamp. I graduated from LEARN Academy, where I honed my skills in JavaScript, React, Ruby on Rails, and PostgreSQL, among others.
            </CardText>
          </CardBody>
        </Card>
      </div>
      <br />

      <a><img src={arrow} alt="arrow" className="icon-logo" /></a>
      <br />
      <br />

      <u><h2>Ceatus Media Group</h2></u>
      <p>2023 - 2023</p>
      <div className='cards'>
        <Card color="" style={{ width: '50rem' }}>
          {/* <CardBody>
    
    </CardBody> */}
          <CardBody>
            <CardText>
              During my internship at Ceatus Media Group, I had the opportunity to dive deep into the world of full stack development, gaining valuable hands-on experience and enhancing my technical skills.
              <CardText>
                As a Full Stack Developer intern, I was tasked with developing web application features using the Ruby on Rails framework. This involved implementing MVC architecture and RESTful design principles across two separate applications, showcasing my proficiency in Ruby on Rails.
              </CardText>
              <CardText>
                Additionally, I honed my database management skills by creating, querying, and maintaining relational databases, with a specialization in PostgreSQL. This experience provided me with a solid foundation in efficient data storage and retrieval practices, crucial for optimizing application performance.
              </CardText>
              <CardText>
                One of the highlights of my internship was the opportunity to work on dynamic user interfaces, where I leveraged HTML, Slim, CSS, and jQuery to create dynamic and responsive views. This not only enhanced the user experience but also expanded my expertise in front-end development.
              </CardText>
              <CardText>
                Furthermore, I developed expertise in custom route configurations, enabling the creation of user-friendly and SEO-optimized URLs for our web application. This demonstrated my ability to optimize application accessibility and visibility.
              </CardText>
              <CardText>
                Throughout my internship, I gained a deeper understanding of the Model-View-Controller (MVC) framework, ensuring code modularity, maintainability, and efficient development workflows. This knowledge proved invaluable in streamlining development processes and collaborating effectively with team members.
              </CardText>
              <CardText>
              Moreover, I developed proficiency in SQL, constructing complex queries for data extraction, filtering, and aggregation. This enabled me to support data-driven decision-making processes and contribute to the overall success of our projects.
              </CardText>
              <CardText>
              Overall, my internship at Ceatus Media Group provided me with invaluable hands-on experience, enhancing my technical skills and preparing me for future opportunities in full stack development.
              </CardText>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export default Journey;