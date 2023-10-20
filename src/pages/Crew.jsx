import React from 'react'
import navbar_icon from '../assets/home/navbar_icon.png'
import './css/crew.css'
import douglas from '../assets/crew/image-douglas-hurley.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Crew = (props) => {
  
  function isActive(path){
    const p = useResolvedPath(path)
    return useMatch({path: p.pathname, end:true})
  }

  return (
    <div className='crew-container'>
        <nav className='crew-navbar'>
            <img src={navbar_icon} alt="" />
            <div className='crew-navbar-line'></div>
            <ul className='crew-menu'>
                <li className={isActive('/') ? 'active-page' : ''}><Link to='/'><b>00 </b>  HOME</Link></li>
                <li className={isActive('/destination') ? 'active-page' : ''}><Link to='/destination'><b>01 </b>  DESTINATION</Link></li>
                <li className={isActive('/crew') ? 'active-page' : ''}><Link to='/crew'><b>02 </b>  CREW</Link></li>
                <li className={isActive('/technology') ? 'active-page' : ''}><Link to='/technology'><b>03 </b>  TECHNOLOGY</Link></li>
            </ul>
        </nav>
        <h1 className='dest-heading'><b>02</b>MEET YOUR CREW</h1>
        <div className='crew-hero'>
            <div className="crew-info">
                <h2>{props.crewInfo.role}</h2>
                <h1>{props.crewInfo.name}</h1>
                <p>{props.crewInfo.bio}</p>
                <div className='circle-container'>
                  <div className={props.crewInfo.id === 0 ? 'circle opacity-one' : 'circle'} onClick={() => props.changeCrew(0)}></div>
                  <div className={props.crewInfo.id === 1 ? 'circle opacity-one' : 'circle'} onClick={() => props.changeCrew(1)}></div>
                  <div className={props.crewInfo.id === 2 ? 'circle opacity-one' : 'circle'} onClick={() => props.changeCrew(2)}></div>
                  <div className={props.crewInfo.id === 3 ? 'circle opacity-one' : 'circle'} onClick={() => props.changeCrew(3)}></div>
                </div>
            </div>
            <div className={`img-container${props.crewInfo.id}`}></div>
        </div>
    </div>
  )
}

export default Crew
