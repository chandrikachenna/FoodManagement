import React, { Component } from 'react';
import {Div,CardsContainer} from './styledComponents';
import {Carousel} from '../../common/Carousel';
import {DatePicker} from '../../../Common/components/DatePicker';
import {Mealcards} from '../../components/Mealcards';

class MealInfo extends Component {
    render() {
        const {mealInfoList,onClickEdit}=this.props;
        return (
            <>
                <Carousel/>
                <Div>
                    <DatePicker/>
                </Div>
                <CardsContainer>
                    <Mealcards mealInfoList={mealInfoList} onClickEdit={onClickEdit}/>
                </CardsContainer>
            </>
        );
    }
}

export {MealInfo};