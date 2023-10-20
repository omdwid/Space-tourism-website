import React from 'react'
import './css/destination.css';
import navbar_icon from '../assets/home/navbar_icon.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Destination = (props) => {

  function isActive(path){
    const p = useResolvedPath(path)
    return useMatch({path: p.pathname, end:true})
  }

  return (
    <div className='dest-container'>
      <nav className='dest-navbar'>
          <img src={navbar_icon} alt="" />
          <div className='dest-navbar-line'></div>
          <ul className='dest-menu'>
            <li className={isActive('/') ? 'active-page' : ''} >
              <Link to='/'><b>00 </b>  HOME</Link>
            </li>
            <li className={isActive('/destination') ? 'active-page' : ''}>
              <Link to='/destination'><b>01 </b>  DESTINATION</Link>
            </li>
            <li className={isActive('/crew') ? 'active-page' : ''}>
              <Link to='/crew'><b>02 </b>  CREW</Link>
            </li>
            <li className={isActive('/technology') ? 'active-page' : ''}>
              <Link to='/technology'><b>03 </b>  TECHNOLOGY</Link>
            </li>
          </ul>
      </nav>
      <h1 className='dest-heading'><b>01</b>PICK YOUR DESTINATION</h1>
      <div className='dest-hero'>
        <img src={props.destInfo.images.png} alt="" />
        <div className='dest-info'>
          <ul className='dest-list'>
            <li className={props.destInfo.name === 'Moon' ? 'active-page' : ''} onClick={() => {props.changeDestination(0)}}>
              Moon
            </li>
            <li className={props.destInfo.name === 'Mars' ? 'active-page' : ''} onClick={() => {props.changeDestination(1)}}>
              Mars
            </li>
            <li className={props.destInfo.name === 'Europa' ? 'active-page' : ''} onClick={() => {props.changeDestination(2)}}>
              Europa
            </li>
            <li className={props.destInfo.name === 'Titan' ? 'active-page' : ''} onClick={() => {props.changeDestination(3)}}>
              Titan
            </li>
          </ul>
          <h1>{props.destInfo.name}</h1>
          <p>{props.destInfo.description}</p>
          <div className='dest-line'></div>
          <div className='dest-distance-info'>
            <div>
              <h3>AVG. DISTANCE</h3>
              <h2>{props.destInfo.distance}</h2>
            </div>
            <div>
              <h3>EST. TRAVEL TIME</h3>
              <h2>{props.destInfo.travel}</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Destination
