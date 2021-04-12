import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={Logo} alt="Logo" />
                <div className="header__logo">
                    <Link to={`/`}>
                        <h1 className="header__logo-header">MARVEL</h1>
                        <h4 className="header__logo-subheader">Neighborhood Defense</h4>
                    </Link>
                </div>
            </div>
            <div className="header__right">
                <Link to={`/donate`}>
                    <button className="btn__primary">Donate now</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;