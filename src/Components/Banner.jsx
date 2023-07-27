import React from 'react'
import xbox from './../Image/x-box.png';
import './../Style/Banner.css'

function Banner() {
  return (
    <div style={{ marginTop: '30px' }}>
      <div className="banner-container center">
        <div className="left-content">
          <h1 className='banner-head'>X-Box For Your Living Room</h1>
          <p className='banner-p'>Comary to popular beliet Lorem Ipsum is not simply andom text. It has roots in a piece of classical Ladie</p>
          <p className='banner-price'>$600</p>
          <button className='banner-button'>Buy Now</button>
        </div>
        <div className="right-content">
          <img src={xbox} alt='x-box' width={220} ></img>
        </div>
      </div>
    </div>
  )
}

export default Banner
