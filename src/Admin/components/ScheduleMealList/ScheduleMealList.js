import React, { Component } from 'react'
import { MealItem } from '../common/MealItem'
import { observer } from 'mobx-react'

@observer
class ScheduleMealList extends Component {
   render() {
      const { mealTypeInfo, removeMealItem } = this.props.data
      console.log(mealTypeInfo)
      return (
         <>
            {mealTypeInfo.map(itemInfo => (
               <MealItem
                  key={Math.random().toString()}
                  itemInfo={itemInfo}
                  removeMealItem={removeMealItem}
               />
            ))}
         </>
      )
   }
}

export { ScheduleMealList }
