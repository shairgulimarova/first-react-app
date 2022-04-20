import React from 'react';
import {Link} from 'react-router-dom'
import "./skills.scss"
import {FaHtml5,FaCss3,FaSass,FaReact} from 'react-icons/fa'
import{DiJavascript} from 'react-icons/di'
import portfolio1 from '../../images/portfolio1.svg'
import portfolio2 from '../../images/portfolio2.jpg'
import portfolio3 from '../../images/portfolio3.svg'




function Skills() {
  return (
    <section className="skills">
        <div className="container">
          <div className="skills__intro">
            <h1>Wellcome to the page about my skills!</h1>
            <p>Front-End React Developer</p>
          </div>
          <div className="skills__description">
            <h3>My skills</h3>
            <ul>
              <li><FaHtml5/></li>
              <li><FaCss3/></li>
              <li><DiJavascript/></li>
              <li><FaSass/></li>
              <li><FaReact/></li>
            </ul>
          </div>

          <div className="skills__portfolio">
            <h4>Latest Works</h4>
            <ul>
              <li>
                <img width={100} src={portfolio1}/>
                <h4>IT start up</h4>
              </li>
              <li>
                <img  width={100} src={portfolio2}/>
                <h4>IT Project</h4>              
              </li>
              <li><img width={100} src={portfolio3}/>
              <h4>Website Templates Site</h4>
              </li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Skills