/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <a className="navbar-brand" href="#">
        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
        Weather App
      </a>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
