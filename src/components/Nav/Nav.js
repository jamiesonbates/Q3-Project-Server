import React from 'react';
import { Link } from 'react-router';
import './Nav.css';

const Nav = (props) => {
  return <div
      className="w-100 Nav-Container"
    >
      <Link to="/map" className="Nav-Logo">
        APP NAME
      </Link>
    </div>
}

export default Nav;
