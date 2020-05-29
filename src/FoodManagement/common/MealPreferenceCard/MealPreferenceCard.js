import React, { Component } from 'react';
import {Layout,Header,Footer,InfoBox,Title,SelectionField} from './styledComponents';
import { withRouter } from "react-router-dom";
import {ButtonComponent} from '../../../Common/components/ButtonComponent';
import strings from '../../../Common/i18n/strings.json';
import {DatePickerComponent} from '../../../Common/components/DatePickerComponent';
import {TabBar} from '../../../Common/components/TabBar';
import {Counter} from '../../../Common/components/Counter';


class MealPreferenceCard extends Component {
    onClick=()=>{
        const {history}=this.props;
        history.push('/food-management/home');
    }
    render() {
        const {skipMeal,back,save}=strings.foodManagement
        return (
            <Layout>
                <Header>
                    <Title>{'BreakFast'}</Title>
                    <ButtonComponent onClick={this.onClick} text={skipMeal}/>
                </Header>
                <SelectionField>
                    {/* <TabBar /> props*/}
                    <DatePickerComponent/>
                </SelectionField>
                <InfoBox>
                   {/* <Counter/> */}
                </InfoBox>
                <Footer>
                    <ButtonComponent onClick={this.onClick} text={back}/>
                    <ButtonComponent onClick={this.onClick} text={save}/>
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(MealPreferenceCard)  ;