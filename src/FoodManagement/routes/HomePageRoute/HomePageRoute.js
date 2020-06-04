import React, { Component } from 'react'
import { HomePage } from '../../components/HomePage'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { MealInfo } from '../../components/MealInfo'
import {format} from 'date-fns';



let array=[1,2,3];
let a;
function incrementArrayElements(array){
   console.log(array.map((item)=> item+1));
   
}

@inject('mealInfoStore', 'authStore')
@observer
class HomePageRoute extends Component {
   constructor(props) {
      super(props)
      this.doNetworkCalls()
      console.log('constructor');
      
   }
   componentDidMount(){
      incrementArrayElements(array)
      console.log(array);
      //console.log('component did mount')
   }
   onClickSignOut = () => {
      this.props.authStore.userSignOut()
      const { history } = this.props
      history.replace({ pathname: 'sign-in' })
   }
   doNetworkCalls = () => {
      setTimeout(()=>{
         const date=format(new Date(this.props.mealInfoStore.timeCounter),'yyyy-MM-dd')
         this.props.mealInfoStore.getMealInfo(date)
      },1000)
   }
   onClickGoHome = () => {
      const { history } = this.props
      this.doNetworkCalls()
      history.push('/food-management/home')
   }
   renderSuccessUI = observer(() => {
      return (
         <MealInfo
            mealInfoList={this.props.mealInfoStore.mealInfo}
            timeCounter={this.props.mealInfoStore.timeCounter}
            mealInfoStore={this.props.mealInfoStore}
         />
      )
   })
   
   render() {
      const {
         getMealInfoAPIStatus,
         getMealInfoAPIError,
         timeCounter
      } = this.props.mealInfoStore
      return (
         <HomePage
            onClickSignOut={this.onClickSignOut}
            mealInfoList={this.props.mealInfoStore.mealInfo}
            onClickEdit={this.props.mealInfoStore.onClickEdit}
            onClickGoHome={this.onClickGoHome}
            doNetworkCalls={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}
            getMealInfoAPIStatus={getMealInfoAPIStatus}
            getMealInfoAPIError={getMealInfoAPIError}
         />
      )
   }
}

export default withRouter(HomePageRoute)
