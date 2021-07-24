import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
                                   //always start with uppercase
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//it is not default js file so put in {}
ReactDOM.render(<App/>
                , document.getElementById('root'));        
/// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 8,9,10 line multiple Card id is for multiple section in webpage
 // robot[]is act like array
 