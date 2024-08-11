import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='position'>
        <div className='navbar'>
          <div className='logo'>
            <Link to='/'>  <img src="./logo.png" alt="" className='port'/></Link>
            
          </div>
          <marquee className='navscri'>Indian English-language news television channel founded by Raghav Bahl based in Noida, Uttar Pradesh, India. It is currently co-owned by TV18 and Warner Bros. Discovery. CNN provides international coverage for the channel, while Indian Broadcasting Network concentrates on Indian and local reports.</marquee>


          <div className='links'>
            <Link to='/' className='text'>HOME</Link>
            <Link to='/about' className='text'>ABOUT</Link>
            <Link to='/contact' className='text'>CONTACT</Link>
            
          </div>

        </div>

      </div>
          
    )
  }
}
