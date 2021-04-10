import React from 'react';
import Logo from '../../assets/images/logo.png';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={Logo} alt="Logo" />
                <div className="header__logo">
                    <h1 className="header__logo-header">MARVEL</h1>
                    <h4 className="header__logo-subheader">Neighborhood Defense</h4>
                </div>
            </div>
            <div className="header__right">
                <button className="btn__primary">Donate now</button>
            </div>
        </div>
    )
}

export default Header;