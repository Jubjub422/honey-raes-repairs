import React from 'react';
import ReactDOM from 'react-dom';
import { Repairs } from './components/Repairs';
import './index.css';

import reportWebVitals from './reportWebVitals';

//invoking the repairs function looks like defining a HTML tag
ReactDOM.render(
  <React.StrictMode>
    <Repairs/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
