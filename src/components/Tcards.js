import React from 'react'
import '../css/Tcards.css'
const Tcards = ({element}) => {
    const {name,message,image}=element;
  return (
    <div class="tcard">
      <img class="tcard-img" src={image} alt="img"/>
      <p class="tcard-p">{name}</p>
      <h4 class="tcard-p2">{message}</h4>
    </div>
  )
}

export default Tcards
