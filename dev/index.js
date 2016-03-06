// Exposed modules for browser
require("expose?jQuery!jquery"); // Bootstrap requirement

// App requirements
require("./index.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import Console from './components/Console.jsx';

// Load Console
ReactDOM.render(<Console />, document.getElementById('root'));
