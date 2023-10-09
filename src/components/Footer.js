import React from 'react'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import message from '../assets/message.png'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div class="Footer">
      <p class="foo-title">PISTONS</p>
      <p class="stay-conn">STAY CONNECTED</p>
      <div class="socials">
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
