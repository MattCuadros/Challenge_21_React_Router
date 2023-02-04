import React from 'react'
import ReactDOM from 'react-dom/client'

import CssBaseline from '@mui/material/CssBaseline';

import App from './App'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline>
        <App />
      </CssBaseline>
    </BrowserRouter>
  </React.StrictMode>
)
