import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import './header.scss';

import logo from "../../assets/img/logo/dome.png";

class Header extends Component {

  render() {
    return (
      <header>
        <section className="navigation_container">
          <div className="content_limitter">
            <h1 className="site_logo">
              <HashLink to="/">
                <img alt="Dome Logo" className="logo_image" src={logo} />
              </HashLink>
            </h1>
            <nav className="site_menu">
              <ul className="main_menu">
                <li>
                  <HashLink to="/#">Home</HashLink>
                </li>
                <li>
                  <HashLink to="/#services">Services</HashLink>
                </li>
                <li>
                  <HashLink to="/#about">About</HashLink>
                </li>
                <li>
                  <HashLink to="/#experiences">Experiences</HashLink>
                </li>
                <li>
                  <HashLink to="/#contacts">Contacts</HashLink>
                </li>
                <li>
                  <HashLink to="/copyright">Copyright</HashLink>
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
