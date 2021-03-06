import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Copyright from './home/copyright';
import Footer from './footer';
import Header from './header';
import Index from './home/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/fontawesome-brands.min.css';
import '../../assets/css/fontawesome-regular.min.css';
import '../../assets/css/timeline.scss';
import '../../assets/css/common.scss';

import './app.scss';

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/copyright" component={Copyright} />
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
