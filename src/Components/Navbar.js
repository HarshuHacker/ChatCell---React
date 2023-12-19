import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserAstronaut,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            {/* <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            /> */}
            <span className='logo'>ChatCell</span>
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
              <FontAwesomeIcon
                  id="user-dp"
                  icon={faUserAstronaut}
                />
              <span>John Doe</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
