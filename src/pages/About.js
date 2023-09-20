import React from 'react'
import TopImage from '../assets/burgerback.jpg'
import '../styles/About.css'

function About() {
  return (
    <div>
        <div className='aboutTop' style={{ backgroundImage: `url(${TopImage})`} } > 
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
                 sed quidem dolores provident, libero totam amet aut quia odio, ea enim sint. 
                Doloribus provident ullam harum eveniet saepe, fuga quas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum similique libero quasi eveniet ipsa qui vero fugiat 
                dolorum rem earum molestias quo repellendus neque, 
                totam natus nobis eaque nostrum exercitationem?</p>
        </div>
        </div>
       
        
    </div>
  )
}

export default About