import React from 'react'
import './../Style/Footer.css'

function Footer() {
  return (
    <div className='footer-cntnr'>
        <div className='datail'>
      <h3>LET'S STAY IN TOUCH</h3>
      <p>get updates on sales specials and more</p>
      <input type='e-mail' placeholder='Enter your E-mail'></input>
      <div style={{paddingTop:'20px'}}><button className='banner-button'>Send</button></div>
      </div>
    </div>
  )
}

export default Footer
