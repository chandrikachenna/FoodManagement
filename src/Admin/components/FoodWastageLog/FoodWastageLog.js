import React, { Component } from 'react'
import { Buttons, Layout } from './styledComponets'
import { Button } from '../../../Common/components/Button'
import { MenuDisplayer } from '../common/MenuDisplayer'
import { COLORS } from '../../../Common/theme/Colors'
import strings from '../../../Common/i18n/strings'
const width = '70px'

class FoodWastageLog extends Component {
   onClickSave = () => {}
   onClickBack = () => {}
   render() {
      const { submit, back, breakfast, lunch, dinner } = strings.admin
      return (
         <>
            <MenuDisplayer
               menu={'Menu1'}
               menu1Name={breakfast}
               menu2Name={lunch}
               menu3Name={dinner}
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
                     name={submit}
                     width={width}
                     variant={COLORS.brightBlue}
                     color={COLORS.white}
                  />
               </Layout>
            </Buttons>
         </>
      )
   }
}

export { FoodWastageLog }
