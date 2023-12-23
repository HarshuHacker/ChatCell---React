import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserAstronaut,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { logoutUser } from '../Actions/auth';

import logo from '../Assets/Images/Logo.png';

class Navbar extends React.Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  render() {
    const { auth } = this.props;
    return (
      <>
        <nav className="nav">
          <div className="left-div">
            <Link to={'/'}>
              <img src={logo} alt="logo" className="site-logo" />
            </Link>
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
            {auth.isLoggedin && (
              <div className="user">
                <Link to="/settings">
                  <FontAwesomeIcon id="user-dp" icon={faUserAstronaut} />
                </Link>
                <span>{auth.user.name}</span>
              </div>
            )}

            <Link style={{color: 'white'}} to={'/setting'}> Setting </Link>

            <div className="nav-links">
              <ul>
                {!auth.isLoggedin && (
                  <li>
                    <Link to="/login">Log in</Link>
                  </li>
                )}

                {auth.isLoggedin && <li onClick={this.logOut}>Log out</li>}

                {!auth.isLoggedin && (
                  <li>
                    <Link to="/signup">Register</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Navbar);
