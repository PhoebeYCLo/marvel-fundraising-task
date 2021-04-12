import React from 'react';
import './donatepage.scss';
import DonateInfo from './DonateInfo';

function DonatePage() {
    return(
        <div className="donatepage">
            <div className="donatepage__container">
                <div className="donatepage__content">
                    <div className="donatepage__top">
                        <div className="donatepage__top-header">Make a donation</div>
                        <DonateInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonatePage;