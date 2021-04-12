import React from 'react';
import './newsletter.scss'

function Newsletter() {
    return(
        <div className="newsletter">
            <div className="newsletter__header">Join Our Newsletter</div>
            <div className="newsletter__container">
                <form className="newsletter__form">
                    <input type="text" id="name" name="name" placeholder="Name" className="newsletter__input"></input>
                    <input type="text" id="email" name="email" placeholder="Email" className="newsletter__input"></input>
                    <input type="submit" value="Submit" className="btn__primary newsletter__btn"></input>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;