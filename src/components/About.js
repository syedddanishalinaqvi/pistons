import React from 'react'
import '../css/About.css'
import scroll1 from '../assets/scroll1.png'
import scroll2 from '../assets/scroll2.png'
import scroll3 from '../assets/scroll3.png'
import scroll4 from '../assets/scroll4.png'


const About = () => {
    return (

        <div class="row" id="About">
            <div class="col image-scroll">
                <div class="scroll-container">
                    <img src={scroll1} alt="scroll1" />
                    <img src={scroll2} alt="scroll2" />
                    <img src={scroll3} alt="scroll3" />
                    <img src={scroll4} alt="scroll4" />
                </div>
            </div>
            <div className="col about-text">
                <div class="about-data">
                    <p class="abt-pistons">ABOUT PISTONS</p>
                    <p class="detail">
                        Established in 1897, our beloved fountain pen haven, 'PISTONS,' has been a haven for pen enthusiasts for generations. With a century-long dedication to fine writing instruments, we've bridged tradition and modernity, offering a curated selection of vintage and contemporary fountain pens. Our little shop, nestled in the heart of town, continues to inspire a love for the art of writing, connecting past and present through the timeless elegance of ink on paper.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
