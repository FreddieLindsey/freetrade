// Exposed modules for browser
require("expose?jQuery!jquery"); // Bootstrap requirement

// App requirements
require("./index.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Load Console
ReactDOM.render(<App />, document.getElementById('root'));
