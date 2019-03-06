import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import Kandy from './Kandy.js';



ReactDOM.render(
    <Router>
        <Kandy />
    </Router>
    , document.getElementById('root'))