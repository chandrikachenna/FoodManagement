import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider, observer } from 'mobx-react'

import './App.css'

import HomePage from './components/HomePage'

import authRoutes from './Authentication/routes'
import foodManagementRoutes from './FoodManagement/routes'
import adminRoutes from './Admin/routes'

import authStore from './Authentication/stores'
import foodManagementStores from './FoodManagement/stores'
import adminStores from './Admin/stores'

@observer
class App extends React.Component {
   render() {
      return (
         <Provider {...authStore} {...foodManagementStores} {...adminStores}>
            <Router basename={process.env.PUBLIC_URL}>
               <Switch>
                  {authRoutes}
                  {foodManagementRoutes}
                  {adminRoutes}
                  <Route exact path='/'>
                     <HomePage />
                  </Route>
                  <Route path="*" component={()=>"404 not Found"}/>
               </Switch>
            </Router>
         </Provider>
      )
   }
}

export default App
