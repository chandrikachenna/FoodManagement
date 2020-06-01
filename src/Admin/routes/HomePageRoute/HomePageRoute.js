import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {HomePage} from '../../components/HomePage';

class HomePageRoute extends Component {
    render() {
        return (
           <HomePage />
        );
    }
}

export default withRouter(HomePageRoute);