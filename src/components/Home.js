import React from 'react'
import "../css/Home.css"
import CircleType from "circletype";
import home1 from "../assets/home-1.png"
import home2 from "../assets/home-2.png"
import home3 from "../assets/home-3.png"
import home4 from "../assets/home-4.png"
import home5 from "../assets/home-5.png"
import home6 from "../assets/home-6.png"
import home7 from "../assets/home-7.png"
const Home = () => {

    const circleFirstInstance = React.useRef();
    const circleSecondInstance = React.useRef();
    
    React.useEffect(() => {
        new CircleType(circleFirstInstance.current).radius(270);
        new CircleType(circleSecondInstance.current).radius(270);
    }, []);
    
    return (
        <div className="home">
            <div className="row">
                <div className="col">
                    <img src={home1} alt='home1' />
                    <p className="circle-text" ref={circleFirstInstance}>MADE FOR YOU </p>
                    <p className='text-on-image'>PISTONS</p>
                </div>
                <div className="col">
                    <img src={home2} alt="home2" />
                    <div className='second-on-image d-flex flex-column'>
                        <p className="no-wrap">YOU WERE MADE TO<br />MAKE AN IMPACT</p>
                        <button>SHOP PENS</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={home3} alt='home1' />
                    <div className='third-on-image d-flex flex-column'>
                        <p>MADE FOR THE BEST<br />CHANGE MAKERS.</p>
                        <button>SHOP BRANDS</button>
                    </div>
                </div>
                <div className="col">
                    <img src={home4} alt="home2" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={home5} alt='home1' />
                </div>
                <div className="col">
                    <img src={home6} alt="home2" />
                    <div className='fourth-on-image d-flex flex-column'>
                        <p>SAVOUR THE PRESENT</p>
                        <button>SHOP MONT BLANC</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={home7} alt='home1' />
                        <p className="fifth-on-image">WHERE QUALITY MEETS class</p>
                        <p className="last-text" ref={circleSecondInstance}>MADE FOR YOU </p>
                    <p className='pistons'>PISTONS</p>
                    <button className="shop-all">SHOP THE FALL 2023 COLLECTION</button>
                </div>
                <div className="bottom-padding">
                    
                </div>
            </div>
        </div>
    )
}

export default Home
