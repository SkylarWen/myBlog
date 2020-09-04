import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SiderDemo from "./Nav/Navi";

//the index.js is important
// SiderDemo is using navigation
ReactDOM.render(
  <React.StrictMode>

      <App />
    <SiderDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();

