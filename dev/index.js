// Exposed modules for browser
require("expose?jQuery!jquery"); // Bootstrap requirement

// App requirements
require("./index.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// Load App
ReactDOM.render(<App />, document.getElementById('root'));
