import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Image from './Image';
import './Header.scss';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <Image className="header__image" src={logo} alt="Logo" />
      </Link>
      <SearchBar className="header__search" />
    </header>
  );
};

export { Header as default };
