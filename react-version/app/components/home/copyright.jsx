import React, { Component } from 'react';

class Copyright extends Component {

  render() {
    return (
      <section>
        <div class="content_limitter">
          <h1 class="title">Copyright information</h1>
          <p class="content">
            This websites use the following assets, fonts, images, libraries:
          </p>
          <ul>
            <li>
              <a href="https://jquery.com" target="_blank">jQuery</a> JavaScript library by The jQuery Foundation. Licensed under MIT License.
            </li>
            <li>
              <a href="https://getbootstrap.com" target="_blank">Twitter Bootstrap</a> CSS library by Bootstrap team and contributors. Licensed under MIT License.
            </li>
            <li>
              <a href="https://fontawesome.com" target="_blank">Font Awesome</a> icons library by Fonticons, Inc. Licensed under Font Awesome Pro Backer License.
            </li>
            <li>
              <a href="https://www.freepik.com/photos/background" target="_blank">Background photo created by suksao - www.freepik.com</a>. Licensed under Freepik License.
            </li>
            <li>
              A modified version of <a href="https://codepen.io/ksantangelo/pen/ZBOpoJ" target="_blank">timeline CSS by Kelsey Santangelo on CodePen</a>.
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Copyright;
