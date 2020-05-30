import React, { Component } from 'react';
import {HomePageContainer,Div,ButtonTextLabel} from './styledComponents';
import {Navbar} from '../../common/Navbar';
import {Carousel} from '../../common/Carousel';
import {DatePickerComponent} from '../../../Common/components/DatePickerComponent';
import LoadingWrapperWithLoader from '../../common/LoadingWrapperWithFailure';

class HomePage extends Component {
    render() {
        const {onClickSignOut,mealInfoList,onClickEdit,onClickGoHome,doNetworkCalls,renderSuccessUI,getMealInfoAPIStatus,getMealInfoAPIError}=this.props;
        return (    
            <HomePageContainer>
                <Navbar onClickSignOut={onClickSignOut} onClickGoHome={onClickGoHome}/>
                <Carousel/>
                <Div>
                    <DatePickerComponent />
                </Div>
                <LoadingWrapperWithLoader
                    apiStatus={getMealInfoAPIStatus}
                    apiError={getMealInfoAPIError}
                    onRetryClick={doNetworkCalls}
                    renderSuccessUI={renderSuccessUI}
                />
            </HomePageContainer>
        );
    }
}

export {HomePage};