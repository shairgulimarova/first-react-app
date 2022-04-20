import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaGithubSquare, FaInstagramSquare, FaYoutube} from 'react-icons/fa'
import { init } from 'ityped'

import shairgulPhoto from '../../images/ya.jpg'




function About() {
    const animatedTextRef = useRef();
    useEffect(()=>{
            init(animatedTextRef.current,{
              showCursor: true,
              strings:["Skills: Html, CSS, Javascript, React js, Node js "],
              backDelay: 1500,
              backSpeed:60,
            })
          },[]); 

  return (
       
      <section className="about">
      <div className="container about__container">
        
        <div className="about__left">
        <img src={shairgulPhoto} className='me' alt='shairgul'></img>                   
      </div>
      <div className="about__right">
        <h1 className='about__title'>Shairgul Imarova</h1>
        <p className='about__subtitle'>Position: Junior Front-End Developer</p>
        <p className='about__skills'><span ref={animatedTextRef}> </span></p>
        <p className='about__poem'>Show me the way to, <br></br>
        Where is the main Goal! <br></br>
        I'll come there asap, <br></br>
        before a rooster wakes up! 
        </p>
         
      <ul className='about__links'>
        <li>
          <a href='https://github.com/' target="_blank" rel='noopender noreferrer'> <FaGithubSquare className='about__icon'/> </a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UCziL2P2HeXRSaf6mDY29VIQ' target="_blank" rel='noopender noreferrer'> <FaYoutube className="about__icon"/></a>
        </li> 
        <li>
          <a href='https://www.instagram.com/' target="_blank" rel='noopender noreferrer'><FaInstagramSquare className="about__icon"/> </a>
        </li>
               
      </ul>
      <Link to="/contacts" className='about__cta'>Hire me</Link>
        </div>       
         </div>
   
            
    </section>

    
  )
}

export default About