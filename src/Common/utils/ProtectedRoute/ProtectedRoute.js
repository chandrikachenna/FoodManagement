import  React from 'react';
import {Redirect,Route} from "react-router-dom";
import {getAccessToken} from '../../../Authentication/utils/StorageUtils';
class ProtectedRoute extends React.Component{
    render(){
        console.log('token',getAccessToken());
        const {component:Component}=this.props;
        if(getAccessToken())
        {
            return <Route path='/food-management/home' component={Component}/>
        }
        else
            return(
                <Redirect to={{pathname:'/food-management/sign-in'}}/>
            )
    }
}

export {ProtectedRoute}