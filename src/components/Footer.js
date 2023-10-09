import React from 'react'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import message from '../assets/message.png'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <p className="foo-title">PISTONS</p>
      <p className="stay-conn">STAY CONNECTED</p>
      <div className="socials">
        <img src={facebook} alt=""/>
        <img src={youtube} alt=""/>
        <img src={instagram} alt=""/>
        <img src={twitter} alt=""/>
        <img src={message} alt=""/>
      </div>
    </div>
  )
}

export default Footer
