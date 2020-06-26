import React, { Component } from 'react'
import { Buttons, Layout, Content } from './styledComponets'
import { Button } from '../../../Common/components/Button'
import { MenuDisplayer } from '../common/MenuDisplayer'
import { COLORS } from '../../../Common/theme/Colors'
import strings from '../../../Common/i18n/strings.json'
import { ScheduleMealList } from '../ScheduleMealList'
import { ScheduleMealStore } from "../../stores/ScheduleMealStore"

const width = '70px'
interface ScheduleMealProps{
   data:ScheduleMealStore
}
class ScheduleMeal extends Component<ScheduleMealProps>{
   onClickSave = () => {}
   onClickBack = () => {}
   render() {
      const { save, back, breakfast, lunch, dinner } = strings.admin
      const { data } = this.props
      return (
         <>
            <MenuDisplayer
               menu={'Menu1'}
               menu1Name={breakfast}
               menu2Name={lunch}
               menu3Name={dinner}
               data={data.scheduleMealInfo}
               renderedComponent={ScheduleMealList}
            />
            <Buttons>
               <Layout>
                  <Button
                     onClick={this.onClickSave}
                     name={back}
                     width={width}
                     variant={COLORS.white}
                     color={COLORS.black}
                  />
                  <Button
                     onClick={this.onClickBack}
                     name={save}
                     width={width}
                     variant={COLORS.jade}
                     color={COLORS.white}
                  />
               </Layout>
            </Buttons>
         </>
      )
   }
}

export { ScheduleMeal }
