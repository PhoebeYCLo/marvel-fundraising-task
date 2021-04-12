import React from 'react';
import './donatepage.scss';
import DonateButton from './DonateButton';

function DonatePage() {
    return(
        <div className="donatepage">
            <div className="donatepage__container">
                <div className="donatepage__content">
                    <div className="donatepage__top">
                        <div className="donatepage__top-header">Make a donation</div>
                        <DonateButton />
                    </div>
                    <div className="donatepage__bottom">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonatePage;