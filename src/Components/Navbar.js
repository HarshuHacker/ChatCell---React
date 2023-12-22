import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserAstronaut,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import logo from '../Assets/Images/Logo.png';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className="nav">
        <div className="left-div">
          <Link to={'/'}><img src={logo} alt="logo" className="site-logo" /></Link>
        </div>
        <div className="search-container">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          <input placeholder="Search" />

          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <FontAwesomeIcon
                  className="font-awesome"
                  icon={faUserAstronaut}
                />
                <span>John Doe</span>
              </li>
              <li className="search-results-row">
                <FontAwesomeIcon
                  className="font-awesome"
                  icon={faUserAstronaut}
                />
                <span>John Doe</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <FontAwesomeIcon id="user-dp" icon={faUserAstronaut} />
            <span>John Doe</span>
          </div>
          <div className="nav-links">
            <ul>
              <li><Link to={'/login'}>Log in</Link></li>
              <li><Link to={'/logout'}>Log out</Link></li>
              <li><Link to={'/signup'}>Register</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
