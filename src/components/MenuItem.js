import React from 'react'

function MenuItem({Image, name , price}) {
  return (
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${Image})`} } ></div>
        <h1>{name}</h1>
        <p>ksh.{price}</p>
    </div>
  )
}

export default MenuItem