import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'

import global from './css/global.module.scss'
import Header from './components/Header'
import App from './App'
import Footer from './components/Footer'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <App/>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)
