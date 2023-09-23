import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import store from './store.js';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router >
        <App />
      </Router>
    </React.StrictMode>,
  </Provider>
)
