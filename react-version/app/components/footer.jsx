import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

class Footer extends Component {

  render() {
    return (
      <footer>
        <section className="copyright_section">
          <div className="content_limitter">
            <p className="content">
              Copyright &copy; 2020 Tung Nguyen. All right reservered.
            </p>
            <p className="content">
              Libraries, images, fonts used herein are the property of their respective owners, <Link to="/copyright">click here for more information</Link>.
            </p>
          </div>
        </section>
      </footer>
    )
  }
}

export default Footer;
