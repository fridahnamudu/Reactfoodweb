import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/background.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <div className='home' style={{ backgroundImage: `url(${BannerImage})`} } >
        <div className='headerContainer' >
          <h1>Klabu-GO</h1>
          <p> BEST STREET FOOD IN TOWN !!</p>

          <Link to='/menu'>
            <button> ORDER NOW</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home;