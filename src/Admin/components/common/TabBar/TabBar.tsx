import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function panesList(One, Two, Three, firstData, secondDate) {
   return [
      {
         menuItem: 'SHEDULE MEAL',
         render: () => (
            <Tab.Pane attached={false}>
               <One data={firstData} />
            </Tab.Pane>
         )
      },
      {
         menuItem: 'HEAD COUNT',
         render: () => (
            <Tab.Pane attached={false}>
               <Two data={secondDate} />
            </Tab.Pane>
         )
      },
      {
         menuItem: 'FOOD WASTAGE LOG',
         render: () => (
            <Tab.Pane attached={false}>
               <Three />
            </Tab.Pane>
         )
      }
   ]
}
interface TabBarProps{
   renderedComponent1:Function
   renderedComponent2:Function
   renderedComponent3:Function
   dataForComponent1:any
   dataForComponent2:any
}

class TabBar extends React.Component <TabBarProps>{
   render() {
      const {
         renderedComponent1,
         renderedComponent2,
         renderedComponent3,
         dataForComponent1,
         dataForComponent2
      } = this.props
      return (
         <Tab
            menu={{ secondary: true, pointing: true }}
            panes={panesList(
               renderedComponent1,
               renderedComponent2,
               renderedComponent3,
               dataForComponent1,
               dataForComponent2
            )}
         />
      )
   }
}

export { TabBar }
