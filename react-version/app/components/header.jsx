import React, { Component } from 'react';

import './header.scss';

import logo from "../../assets/img/logo/dome.png";

class Header extends Component {

  render() {
    return (
      <header>
        <section className="navigation_container">
          <div className="content_limitter">
            <h1 className="site_logo">
              <a href="/">
                <img alt="Dome Logo" className="logo_image" src={logo} />
              </a>
            </h1>
            <nav className="site_menu">
              <ul className="main_menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="clearfix"></div>
        </section>
      </header>
    )
  }
}

export default Header;
