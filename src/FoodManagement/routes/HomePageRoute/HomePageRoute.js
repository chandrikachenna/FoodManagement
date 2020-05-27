import React, { Component } from 'react';
import {HomePage} from '../../components/HomePage';
import { withRouter } from "react-router-dom";


class HomePageRoute extends Component {
    render() {
        return (
            <HomePage />
        );
    }
}

export default withRouter(HomePageRoute);