import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'


import App from "./ext-src/src/App.js"


const router = (
  <Router>
    <div>
      <Route exact path="/" component={ App }/>
    </div>
  </Router>
)

export default router
