import React from 'react';
import Logo from '../svg/Logo'
const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <Logo />
                </div>
                <h1 className="header__title">Search city weather</h1>
            </div>
        </header>
    )
}
export default Header;
