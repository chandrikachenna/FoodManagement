import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {MealSchedulePage} from '../../components/MealSchedulePage';
class MealScheduleRoute extends Component {
    render() {
        return (
            <MealSchedulePage/>
        );
    }
}

export default withRouter(MealScheduleRoute);