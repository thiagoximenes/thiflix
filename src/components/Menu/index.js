import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Thiflix logo"></img>
            </a>
            <ButtonLink className="ButtonLink">Novo vídeo</ButtonLink>
        </nav>
    );
}

export default Menu;