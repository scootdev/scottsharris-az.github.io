import React, { Component } from 'react';
import './App.css';
import About from './pages/about'
import Work from './pages/work'
import Contact from './pages/contact'
import Navbar from './components/navbar'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

  state = {
    page: "about"
  }

  changePage = page => {
    this.setState({ page: page })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar 
            changePage={this.changePage}
            page={this.state.page}
          />
          <AnimatePresence>
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
