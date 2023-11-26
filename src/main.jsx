import React from 'react'
import ReactDOM from 'react-dom/client'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
// Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer theme='dark'/>
  </React.StrictMode>,
)
