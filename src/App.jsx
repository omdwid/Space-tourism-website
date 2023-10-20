import { useState } from 'react'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Home from './pages/Home'
import Technology from './pages/Technology'
import { Routes, Route } from 'react-router-dom'
import data from './data.json'

function App() {

  const [destInfo, setDestInfo] = useState({
    "name": "Moon",
    "images": {
      "png": "../src/assets/destination/image-moon.png",
      "webp": "..src/assets/destination/image-moon.webp"
    },
    "description": "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  });

  const [crewInfo, setCrewInfo] = useState(data.crew[0]);

  function changeDestination(id) {
    setDestInfo(data.destinations[id]);
  }

  function changeCrew(id) {
    setCrewInfo(data.crew[id]);
  }

  const [techInfo, setTechInfo] = useState(data.technology[0]);

  function changeTech(id) {
    setTechInfo(data.technology[id]);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/destination' element={ <Destination destInfo={destInfo} changeDestination={changeDestination} /> }></Route>
        <Route path='/crew' element={<Crew crewInfo={crewInfo} changeCrew={changeCrew}/>}></Route>
        <Route path='/technology' element={<Technology techInfo={techInfo} changeTech={changeTech}/>}></Route>
      </Routes>
    </>
  )
}

export default App