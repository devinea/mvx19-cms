'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

// Import global styles
require('normalize.css');
require('./src/css/72.css');
require('./src/css/SAP-icons.css');
require('./src/css/reset.css');
require('./src/styles/global.css');

// Expose React and ReactDOM as globals for console playground
window.React = React;
window.ReactDOM = ReactDOM;

export { default as wrapRootElement } from './src/state/ReduxWrapper';
