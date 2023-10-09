import React,{useEffect,useState} from 'react'
import '../css/Testimonials.css'
import Tcards from './Tcards'

const Testimonials = () =>{ 
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('https://elitefit4you.com/test-api/testimonials.json', {
      method: "GET",
      mode:'cors',
      headers: {
        "Accept":"/",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
      },
    })
    .then(response => response.json())
    .then(res=>setData(res.testimonials))
  },[]);

  return (
    <div class="all-testi">
      <p class="testimonials">TESTIMONIALS</p>
      <div class="all-cards">
        {data.map((element)=>{
          return <div class="all-card-items" key={element.name}><Tcards element={element}/></div>
        })}
        </div>
    </div>
  )
}

export default Testimonials
