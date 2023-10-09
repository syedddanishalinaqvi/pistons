import React, { useState } from 'react'
import search from "../assets/search.png"
import cart from "../assets/cart.png"
import bars from "../assets/bars.png"
import close from "../assets/Close.png"
import "../css/Navbar.css"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const anchor = document.querySelector('#About')
        anchor.scrollIntoView({ behavior: 'smooth' })
        if(isMenuOpen){
            setIsMenuOpen(false);
        }
    }

    const handleBarsClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(true);
    };

    const handleCloseClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="position">
                <div className="alert-nav">
                    <p>FREE SHIPPING ON ALL ORDERS</p>
                </div>
                <div className="nav">
                    <a className="brand-name" href="/">PISTONS</a>
                    <div className="items" id="items">
                        <a href="/">NEW</a>
                        <a href="/">BRANDS</a>
                        <a href="/">COLLECTIONS</a>
                        <a href="/">ACCESSORIES</a>
                        <a onClick={handleClick} href="/">ABOUT</a>
                    </div>
                    <div className="cart-search">
                        <a className='position-relative' href="/"><img src={cart} alt="cart" /><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
                            0
                        </span>
                        </a>
                        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" href='/'><img src={search} alt="search" /></a>
                        {isMenuOpen ? (
                            <a className="close" href="/" onClick={handleCloseClick}>
                                <img src={close} alt="close" />
                            </a>
                        ) : (
                            <a className="bars" href="/" onClick={handleBarsClick}>
                                <img src={bars} alt="bars" />
                            </a>
                        )}
                    </div>

                </div>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex justify-content-end">
                            <input className="me-5 border border-black" type="text" />
                            <button type="button" className="btn btn-dark search">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                    <div classNameName="mobile-menu">
                        <a href="/">NEW</a>
                        <a href="/">BRANDS</a>
                        <a href="/">COLLECTIONS</a>
                        <a href="/">ACCESSORIES</a>
                        <a onClick={handleClick} href="/">
                            ABOUT
                        </a>
                    </div>
                )}
        </>
    )
}

export default Navbar
