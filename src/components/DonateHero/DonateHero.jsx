import React from 'react';
import { Link } from 'react-router-dom';
import './donatehero.scss';

function DonateHero() {
    return(
        <div className="donatehero">
            <div className="donatehero__content container">
                <div className="donatehero__header">You have the power to advocate for justice around the world. Make your gift to Neighborhood Defense today.</div>
                <Link to={`/donate`}>
                    <button className="btn__secondary donatehero__button">Donate now</button>
                </Link>
            </div>
        </div>
    )
}

export default DonateHero;