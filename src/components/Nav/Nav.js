import React from 'react';
import { Link } from 'react-router-dom';
import NavCloud from '../../assets/blank_cloud.svg';
import './Nav.css';

const Nav = () => {
  return (
    <Link to="/">
      <img className="Nav__Img" src={NavCloud} alt="Click to return home" />
    </Link>
  );
};

export default Nav;
