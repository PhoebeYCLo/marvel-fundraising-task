import React from 'react';
import './donatehero.scss';

function DonateHero() {
    return(
        <div className="donatehero">
            <div className="donatehero__content container">
                <div className="donatehero__header">You have the power to advocate for justice around the world. Make your gift to Neighborhood Defense today.</div>
                <button className="btn__secondary donatehero__button">Donate now</button>
            </div>
        </div>
    )
}

export default DonateHero;