import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'    //inported Brouwser BrowserRouter
import App from './App'
import './index.css'


ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,   //Rendered Browser router component
  document.getElementById('root'))
