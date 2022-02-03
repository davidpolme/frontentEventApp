import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header__menu">
            <Link to="/register">Regístrate</Link>
            <br/>
            <Link to="/login">Inicia Sesión</Link>
        </div>
    </header>

);

export default Header;