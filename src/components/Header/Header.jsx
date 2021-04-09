import React from 'react';
import Logo from '../../assets/images/logo.png';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <div><img src={Logo} alt="Logo" /></div>
        </div>
    )
}

export default Header;