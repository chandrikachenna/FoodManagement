import React, { Component } from 'react'
import { HomePageContainer, Div, CardsContainer } from './styledComponents'
import { Navbar } from '../common/Navbar'
import LoadingWrapperWithLoader from '../common/LoadingWrapperWithFailure'
import { Carousel } from '../common/Carousel'
import { DatePicker } from '../../../Common/components/DatePicker'
import { MealInfoStore } from '../../stores/MealInfoStore'
import { APIStatus } from '@ib/api-constants'
import { GetMealInfoResponse } from '../../stores/types'

interface HomePageProps {
   mealInfoStore: MealInfoStore
   onClickSignOut: () => void
   onClickGoHome: () => void
   doNetworkCalls: () => void
   onClickEdit: (mealType: string) => void
   renderSuccessUI: Function
   getMealInfoAPIStatus: APIStatus
   getMealInfoAPIError: Error | null
   mealInfoList: GetMealInfoResponse | null
}

class HomePage extends Component<HomePageProps> {
   render() {
      const {
         onClickSignOut,
         onClickGoHome,
         doNetworkCalls,
         renderSuccessUI,
         getMealInfoAPIStatus,
         getMealInfoAPIError
      } = this.props
      const { onChangeDate } = this.props.mealInfoStore
      const { mealInfoStore } = this.props
      return (
         <HomePageContainer>
            <Navbar
               onClickSignOut={onClickSignOut}
               onClickGoHome={onClickGoHome}
            />
            <Carousel />
            <Div>
               <DatePicker
                  onChangeDate={onChangeDate}
                  date={mealInfoStore.timeCounter}
               />
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
      )
   }
}

export { HomePage }
