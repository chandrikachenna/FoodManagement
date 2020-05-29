import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider, observer } from "mobx-react";

import "./App.css";

import HomePage from './components/HomePage'
import Page1 from './components/Page1'

import authRoutes from './Authentication/routes';
import authStore from './Authentication/stores';
import foodManagementRoutes from './FoodManagement/routes';

import foodManagementStores from './FoodManagement/stores';




@observer
class App extends React.Component{
  render(){
    return(
      <Provider {...authStore} {...foodManagementStores}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
            
             {authRoutes}
              {foodManagementRoutes}
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>

          </Router>
      </Provider>
    )
  }
}


export default App
