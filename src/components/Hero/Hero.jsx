import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';

function Hero() {
    return(
        <div className="hero">
            <div className="hero__content">
                <div className="hero__header">
                    <h1 className="hero__header-text">Support your friendly<br/> 
                    neighborhood superhero</h1>
                <Link to={`/donate`}>
                    <button className="btn__primary">Donate now</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;