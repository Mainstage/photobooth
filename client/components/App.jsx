import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import PhotoUpload from './PhotoUpload.jsx';
import PrintMenu from './PrintMenu.jsx';

const App = () => (
  <div className="app-container">
    <div className="BG" />
    <Router history={hashHistory}>
      <Route path="/" component={PhotoUpload} />
      <Route path="/gallery" component={PrintMenu} />
    </Router>
  </div>
);

export default App;
