import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getAccessToken, getRole } from '../../../utils/StorageUtils';

class ProtectedRoute extends React.Component {
   render() {
      const { component: Component ,adminPage :AdminPage} = this.props
      if (getAccessToken() ){
            if( getRole().match('Admin')){
               return <Redirect to={{pathname:'/food-management/admin/home'} }/>
            }
            else if(getRole().match('User'))
               return <Route exact path={'/food-management/home'} component={Component}/>
      }  
      else return <Redirect to={{ pathname: '/food-management/sign-in' }} />
   }
}

export { ProtectedRoute }
