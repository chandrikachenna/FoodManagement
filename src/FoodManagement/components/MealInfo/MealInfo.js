import React, { Component } from 'react';
import {Div,CardsContainer} from './styledComponents';
import {Carousel} from '../../common/Carousel';
// import {DatePicker} from '../../../Common/components/DatePicker';
import {Mealcards} from '../../components/Mealcards';

import DatePicker from 'react-datepicker';
import { observable } from "mobx";
import { compareAsc, format,formatDistance } from 'date-fns';
import { observer } from "mobx-react";

@observer
class MealInfo extends Component {
    @observable date = new Date();
    @observable time;
    currentDate=new Date();
    componentDidMount=()=>{
        setInterval(()=>{
            this.time = new Date();
        },1000)
    }
    handleChange = (date) => {
          this.date = date;
          this.props.onChangeDate(date);
    }; 
    render() {
        //console.log(this.time,"now.......");
        console.log(
            formatDistance(
                new Date(this.currentDate),
                new Date(this.date),
                { addSuffix: true }
              ) 
        )
        const {mealInfoList,onClickEdit}=this.props;
        return (
            <>
                <Carousel/>
                <Div>
                    <DatePicker
                        selected={this.date}
                        onChange={this.handleChange}
                    />
                </Div>
                <CardsContainer>
                    <Mealcards mealInfoList={mealInfoList} onClickEdit={onClickEdit} />
                </CardsContainer>
            </>
        );
    }
}

export {MealInfo};