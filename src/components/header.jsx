import '../styles/header.css';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {

    const [toggle, setToggle] = useState(false)
    const [nav, setNav] = useState('header-nav')
    const showNavMobile = () => {
        if (toggle === false) {
            setToggle(true);
            setNav('header-nav active')
        } else {
            setToggle(false);
            setNav('header-nav')
        }
    }
    return (
        <header id='container-header'>
            <div className="header-logo">
                <h2><span>&lt; </span>GVFITNESS<span> /&gt;</span></h2>
            </div>
            <div className="header-mobile-button">
                {
                    toggle === false?(
                        <FaBars onClick={showNavMobile}/>
                    ):
                    (
                        <FaTimes onClick={showNavMobile}/>
                    )
                }
            </div>
            <div className={nav}>
                <a href="#">Dados</a>
                <a href="/Home">Fichas</a>
            </div>
            
        </header>
    )
}

export default Header;