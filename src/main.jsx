import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './Scroll.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
)
