import React from 'react';
import {Link} from 'react-router-dom'
import "./skills.scss"
import {FaHtml5,FaCss3,FaSass,FaReact} from 'react-icons/fa'
import{DiJavascript} from 'react-icons/di'
import portfolio1 from '../../images/portfolio1.svg'
import portfolio2 from '../../images/portfolio2.jpg'
import portfolio3 from '../../images/portfolio3.svg'
import {motion} from "framer-motion"




function Skills() {
  const textVariants = {
    hidden:{
      x:-100,
      opacity:0,
    },
    visible: custom =>( {
      x:0,
      opacity:1,
      transition:{delay:custom * 0.7}
    })
  }

  const imgVariants = {
    hidden:{
      y:100,
      opacity:0
    },
    visible:custom =>({
      y:0,
      opacity:1,
      transition:{delay:custom * 0.7}
    })
  }


  return (
    <motion.section 
    initial = "hidden"
    whileInView ="visible"
    className="skills">
        <div className="container">
          <div className="skills__intro">
            <motion.h1
            initial={"hidden"}

            animate={"visible"}
            variants={textVariants}
            custom={1}
            >Wellcome to My Skills</motion.h1> 
            <motion.p 
             initial={"hidden"}

            animate={"visible"}
            variants={textVariants}
            custom={2}
            > Front-End React Developer
            </motion.p>
          
          </div>
          <motion.div 
          initial={"hidden"}

          animate={"visible"}
          variants={textVariants}
          custom={3}
          className="skills__description">
            <h3>My skills</h3>
            <ul>
              <li><FaHtml5/></li>
              <li><FaCss3/></li>
              <li><DiJavascript/></li>
              <li><FaSass/></li>
              <li><FaReact/></li>
            </ul>
          </motion.div>

          <motion.div 
           initial={"hidden"}

           animate={"visible"}
           variants={imgVariants}
           custom={4}
          className="skills__portfolio">
            <h4>Latest Works</h4>
            <ul>
              <li>
                <img width={100} src={portfolio1} alt="portfolio1"/>
                <h4>IT start up</h4>
              </li>
              <li>
                <img  width={100} src={portfolio2} alt="portfolio2"/>
                <h4>IT Project</h4>              
              </li>
              <li><img width={100} src={portfolio3} alt="portfolio3"/>
              <h4>Website Templates Site</h4>
              </li>
            </ul>
          </motion.div>
        </div>
    </motion.section>
  )
}

export default Skills