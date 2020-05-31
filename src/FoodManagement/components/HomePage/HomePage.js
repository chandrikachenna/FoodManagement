import React, { Component } from 'react';
import {HomePageContainer,Div,CardsContainer,ButtonTextLabel} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import {Carousel} from '../../common/Carousel';
import {DatePicker} from '../../../Common/components/DatePicker';
import LoadingWrapperWithLoader from '../../common/LoadingWrapperWithFailure';
import { API_FETCHING} from '@ib/api-constants';

class HomePage extends Component {
    render() {
        console.log(API_FETCHING)
        const {onClickSignOut,onClickGoHome,doNetworkCalls,renderSuccessUI,getMealInfoAPIStatus,getMealInfoAPIError}=this.props;
        return (    
            <HomePageContainer>
               <Navbar onClickSignOut={onClickSignOut} onClickGoHome={onClickGoHome}/>
                <Carousel/>
                <Div>
                    <DatePicker />
                </Div>
                <CardsContainer>
                    <LoadingWrapperWithLoader
                        apiStatus={getMealInfoAPIStatus}
                        apiError={getMealInfoAPIError}
                        onRetryClick={doNetworkCalls}
                        renderSuccessUI={renderSuccessUI}
                    />
                </CardsContainer>
            </HomePageContainer>
        );
    }
}

export {HomePage};