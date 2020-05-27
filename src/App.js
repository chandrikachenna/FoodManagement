import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider, observer } from "mobx-react";

import HomePage from './components/HomePage'
import Page1 from './components/Page1'

import authRoutes from './Authentication/routes';
import authStores from './Authentication/stores';
import foodManagementRotes from './FoodManagement/routes';

import "./App.css";



@observer
class App extends React.Component{
  render(){
    return(
      <Provider {...authStores}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              {authRoutes}
              {foodManagementRotes}
              <Route exact path="/page-1">
                <Page1 />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Router>
      </Provider>
    )
  }
}


export default App
