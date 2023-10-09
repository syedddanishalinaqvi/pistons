import React  from 'react'
import '../css/Testimonials.css'
// import Tcards from './Tcards'

const Testimonials = () =>{ 
  // const [data,setData]=useState([]);

  // useEffect(()=>{
  //   fetch('https://elitefit4you.com/test-api/testimonials.json', {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin":"*"
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(res=>setData(res.testimonials))
  // },[]);

  return (
    <div className="all-testi">
      <p className="testimonials">TESTIMONIALS</p>
      <div className="all-cards">
        {/* {data.map((element)=>{
          return <div className="all-card-items" key={element.name}><Tcards element={element}/></div>
        })} */}
        </div>
    </div>
  )
}

export default Testimonials
