import React from 'react';
import Protect from '../../assets/images/protecting.png';
import Defender from '../../assets/images/defender.png';
import FemaleSuperheroes from '../../assets/images/femaleSuperheroes.png';
import './why.scss';

function Why() {
    return(
        <div className="why">
            <div className="why__header">Life doesn't give us purpose.<br/><span className="colored">We give life purpose.</span></div>

            <div className="container">
                <div className="why__Item">
                    <div className="why__Item--left">
                        <div className="why__Item-image"><img src={Defender} alt="Fight supervillains" /></div>
                    </div>
                    <div className="why__Item--right">
                        <div className="why__Item-header">Defender of the Society</div>
                        <p className="why__Item-text">Some of us use our powers to help fight daily crime while also combating threats against humanity from supervillains, who are their criminal counterparts.</p>
                    </div>
                </div>

                <div className="why__Item">
                    <div className="why__Item--left">
                        <div className="why__Item-image"><img src={Protect} alt="Hulk protecting kids" /></div>
                    </div>
                    <div className="why__Item--right">
                        <div className="why__Item-header">Child Protection and Inclusion</div>
                        <p className="why__Item-text">We promote well-intentioned messages about standing up for peers and protecting others. Also kids can learn more about a courage, self-sacrifice, self-control, and willpower.</p>
                    </div>
                </div>
                
                
                <div className="why__Item">
                    <div className="why__Item--left">
                        <div className="why__Item-image"><img src={FemaleSuperheroes} alt="Fight supervillains" /></div>
                    </div>
                    <div className="why__Item--right">
                        <div className="why__Item-header">Women's Voice and Leadership</div>
                        <p className="why__Item-text">Female superheroes make girls feel more “strong, brave, confident, inspired, positive and motivated,” and ultimately empower them to feel like “they can achieve anything they put their mind to.”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why;