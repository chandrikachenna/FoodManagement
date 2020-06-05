import React, { Component } from 'react'
import { Layout, ItemInfo, Item, Category, Icon } from './styledComponents'
import DelIcon from '../../../../Common/icons/deleteIcon.svg'
import { Counter } from '../../../../Common/components/Counter'
class MealItem extends Component {
   render() {
      const {
         item,
         category,
         fullMealsQuantity,
         halfMealsQuantity,
         onIncrementFullMealsQuantity,
         onDecrementFullMealsQuantity,
         onIncrementHalfMealsQuantity,
         onDecrementHalfMealsQuantity
      } = this.props
      return (
         <Layout>
            <ItemInfo>
               <Item>{'item'}</Item>
               <Category>{'category'}</Category>
            </ItemInfo>
            <Counter
               number={fullMealsQuantity}
               onIncrement={onIncrementFullMealsQuantity}
               onDecrement={onDecrementFullMealsQuantity}
            />
            <Counter
               number={halfMealsQuantity}
               onIncrement={onIncrementHalfMealsQuantity}
               onDecrement={onDecrementHalfMealsQuantity}
            />
            <Icon src={DelIcon} />
         </Layout>
      )
   }
}

export { MealItem }
