import React from 'react'
import './css/technology.css'
import navbar_icon from '../assets/home/navbar_icon.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Technology = (props) => {
  function isActive(path){
    const p = useResolvedPath(path)
    return useMatch({path: p.pathname, end:true})
  }
  return (
    <div className='tech-container'>
      <nav className='tech-navbar'>
            <img src={navbar_icon} alt="" />
            <div className='tech-navbar-line'></div>
            <ul className='tech-menu'>
              <li className={isActive('/') ? 'active-page' : ''}><Link to='/'><b>00 </b>  HOME</Link></li>
              <li className={isActive('/destination') ? 'active-page' : ''}><Link to='/destination'><b>01 </b>  DESTINATION</Link></li>
              <li className={isActive('/crew') ? 'active-page' : ''}><Link to='/crew'><b>02 </b>  CREW</Link></li>
              <li className={isActive('/technology') ? 'active-page' : ''}><Link to='/technology'><b>03 </b>  TECHNOLOGY</Link></li>
            </ul>
        </nav>
        <h1 className='dest-heading'><b>03</b>SPACE LAUNCH 101</h1>
        <div className='tech-hero'>
            <div className='tech-left'>
              <div className='tech-circle-container'>
                <div 
                className={props.techInfo.id===0 ? 'tech-circle tech-circle-active' : 'tech-circle'} 
                onClick={() => props.changeTech(0)}>
                  1
                </div>
                <div 
                className={props.techInfo.id===1 ? 'tech-circle tech-circle-active' : 'tech-circle'} 
                onClick={() => props.changeTech(1)}>
                  2
                </div>
                <div className={props.techInfo.id===2 ? 'tech-circle tech-circle-active' : 'tech-circle'} 
                onClick={() => props.changeTech(2)}>
                  3
                </div>
              </div>
              <div className="tech-info">
                <h2>THE TERMINOLOGY.....</h2>
                <h1>{props.techInfo.name}</h1>
                <p>{props.techInfo.description}</p>
              </div>
            </div>
            <div className={`tech-img-container${props.techInfo.id}`}></div>
        </div>
    </div>
  )
}

export default Technology
