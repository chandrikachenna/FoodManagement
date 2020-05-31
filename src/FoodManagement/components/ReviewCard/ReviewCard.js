import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Layout,Title,SubTitle,Header,Review,Item,InfoContainer} from './styledComponents';
import {StarRating} from '../../common/StarRating';
import {Button} from '../../../Common/components/Button';
import strings from '../../../Common/i18n/strings.json';
import {COLORS} from '../../../Common/theme/Colors';
import {TextArea} from '../../../Common/components/TextArea';

class ReviewCard extends Component {
    onClick=()=>{
        const {history}=this.props;
        history.push('/food-management/home');
    }
    render() {
        const {done}=strings.foodManagement
        return (
            <Layout>
                <Title>Review</Title>
                <Header>
                    <SubTitle>Quality</SubTitle>
                    <SubTitle>Quantity</SubTitle>
                </Header>
                <Review>
                    <InfoContainer>
                        <Item>Poori</Item>
                        <Item>Chapathi</Item>
                        <Item>Dosa</Item>
                        <Item>Idly  </Item>
                    </InfoContainer>
                    <InfoContainer>
                    <StarRating/>
                        <StarRating/>
                        <StarRating/>
                        <StarRating/>
                    </InfoContainer>
                    <InfoContainer>
                        <StarRating/>
                        <StarRating/>
                        <StarRating/>
                        <StarRating/>
                    </InfoContainer>
                </Review>
                <TextArea/>
                <Button name={done} variant={COLORS.jade} width={'73px'} onClick={this.onClick}/>
            </Layout>
        );
    }
}

export default withRouter(ReviewCard);



      