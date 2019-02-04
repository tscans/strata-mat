import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var divElement = document.createElement("div");
divElement.id = "myapp";
document.body.append(divElement);

ReactDOM.render(<App />, document.getElementById('myapp'));

