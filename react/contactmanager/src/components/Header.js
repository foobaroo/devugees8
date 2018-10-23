import React, { Component } from 'react';

import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <i className="fas fa-home">
                <a href="/" className="navbar-brand">
                  Home
                </a>
              </i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.PropTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
