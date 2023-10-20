import React from 'react'
import navbar_icon from '../assets/home/navbar_icon.png'
import '../App.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Home = () => {
    function isActive(path){
        const p = useResolvedPath(path)
        return useMatch({path: p.pathname, end:true})
    }

  return (
    <div className='container'>
        <nav className='navbar'>
            <img src={navbar_icon} alt="" />
            <div className='navbar-line'></div>
            <ul className='menu'>
                <li className={isActive('/') ? 'active-page' : ''}><Link to='/'><b>00 </b>  HOME</Link></li>
                <li className={isActive('/destination') ? 'active-page' : ''}><Link to='/destination'><b>01 </b>  DESTINATION</Link></li>
                <li className={isActive('/crew') ? 'active-page' : ''}><Link to='/crew'><b>02 </b>  CREW</Link></li>
                <li className={isActive('/technology') ? 'active-page' : ''}><Link to='/technology'><b>03 </b>  TECHNOLOGY</Link></li>
            </ul>
        </nav>
        <div className='hero'>
            <div className="info">
                <h2>So, You want to travel to space</h2>
                <h1>SPACE</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <div className='outer-circle'>
                <div className='circle'>
                    EXPLORE
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
