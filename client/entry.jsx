import 'babel-polyfill';
import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import './styles/styles.css';

import App from './components/App.jsx';

render(<App />, document.getElementById('app'));
