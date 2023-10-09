import React from 'react'
import '../css/Tcards.css'
const Tcards = ({element}) => {
    const {name,message,image}=element;
  return (
    <div className="tcard">
      <img className="tcard-img" src={image} alt="img"/>
      <p className="tcard-p">{name}</p>
      <h4 className="tcard-p2">{message}</h4>
    </div>
  )
}

export default Tcards
