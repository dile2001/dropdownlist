import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AgeCalculator from './App.js';
//import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AgeCalculator yearOfBirth="1978" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
