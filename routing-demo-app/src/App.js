import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Home, About, Contact } from './components/site';

export const App = () => {

  return <>
    <header>
      <h1>App</h1>
    </header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/42">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Route path="/about/:id">
      <About />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/" exact>
      <Home />
    </Route>
  </>

};