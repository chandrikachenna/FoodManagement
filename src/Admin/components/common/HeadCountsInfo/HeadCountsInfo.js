import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Layout, Text, Div, Items } from './styledComponents'
import { MealItemHeadCounts } from '../MealItemHeadCounts'

@observer
class HeadCountsInfo extends Component {
   render() {
      const { data: headCountsInfo } = this.props
      const {
         full_meal_head_count,
         half_meal_head_count,
         skipped_meal_head_count,
         customed_meal_head_count,
         total_meal_head_count,
         completed_meal_head_count,
         food_prepared
      } = headCountsInfo
      console.log(this.props)
      return (
         <>
            <Items>
               {food_prepared.map(item => (
                  <MealItemHeadCounts
                     key={Math.random().toString()}
                     info={item}
                  />
               ))}
            </Items>

            <Layout>
               <Div>
                  <Text>Full Meal Head Count :{full_meal_head_count}</Text>
                  <Text>Half Meal Head Count :{half_meal_head_count}</Text>
                  <Text>
                     Skipped Meal Head Count :{skipped_meal_head_count}
                  </Text>
               </Div>
               <Div>
                  <Text>
                     Customed Meal Head Count :{customed_meal_head_count}
                  </Text>
                  <Text>Total Meal Head Count :{total_meal_head_count}</Text>
                  <Text>
                     Completed Meal Head Count :{completed_meal_head_count}
                  </Text>
               </Div>
            </Layout>
         </>
      )
   }
}

export default HeadCountsInfo
