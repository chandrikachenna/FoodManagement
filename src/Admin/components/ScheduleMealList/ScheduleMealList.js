import React, { Component } from 'react';
import { MealItem } from "../common/MealItem";

class ScheduleMealList extends Component {
    render() {
        const {data:scheduleMealInfo}=this.props
        return (
            <>
                {scheduleMealInfo.map((itemInfo)=>
                    <MealItem itemInfo={itemInfo}/>
                )}
                
            </>
        );
    }
}

export {ScheduleMealList};