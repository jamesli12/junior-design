import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Practice from './components/Practice/Practice';
import Problems from './components/Problems/Problems';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/problems" component={Problems} />
          <Route>
            <Navbar />
            <Home />
            <About />
            <Practice />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
