import React, { Component } from 'react'
import { Layout, Button as ButtonTag, Text } from './styledComponents'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import {Button} from '../../components/Button';
import { COLORS } from '../../theme/Colors'
@observer
class TabBar extends Component {
   // @observable selectedBtn=this.props.mealFormat;
   @observable selectedBtn = 'FullMeal'
   onclickFullMeal = () => {
      this.selectedBtn = 'FullMeal'
      this.props.onClikFullMeal()
   }
   onclickHalfMeal = () => {
      this.selectedBtn = 'HalfMeal'
      this.props.onClikHalfMeal()
   }
   onclickCustom = () => {
      this.selectedBtn = 'CustomMeal'
      this.props.onClikCustom()
   }
   render() {
      return (
         <Layout>
            
            <Button
                     onClick={this.onclickFullMeal}
                     name={'Full Meal'}
                     width={'102px'}
                     color={
                        this.selectedBtn.match('FullMeal')
                           ? COLORS.white
                           : COLORS.black
                     }
                     variant={
                         this.selectedBtn.match('FullMeal')
                           ? COLORS.brightBlue
                           : COLORS.white
                     }
                     
                  />
          
            <Button
                     onClick={this.onclickHalfMeal}
                     name={'Half Meal'}
                     width={'102px'}
                     color={
                        this.selectedBtn.match('HalfMeal')
                           ? COLORS.white
                           : COLORS.black
                     }
                     variant={
                         this.selectedBtn.match('HalfMeal')
                           ? COLORS.brightBlue
                           : COLORS.white
                     }
                  />
           
            <Button
                     onClick={this.onclickCustom}
                     name={'Custom'}
                     width={'102px'}
                     color={
                        this.selectedBtn.match('CustomMeal')
                           ? COLORS.white
                           : COLORS.black
                     }
                     variant={
                         this.selectedBtn.match('CustomMeal')
                           ? COLORS.brightBlue
                           : COLORS.white
                     }
                     
                  />
         </Layout>
      )
   }
}

export { TabBar }
