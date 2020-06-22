import React, { Component } from 'react'
import { Layout, Text } from './styledComponents'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { Button } from '../../../../Common/components/Button'
import { COLORS } from '../../../../Common/theme/Colors'

const menus = { menu1: 'Menu1', menu2: 'Menu2', menu3: 'Menu3' }
const width:any = '102px'

interface MenuBarProps{
   menu:string,
   menu1Name:string,
   menu2Name:string,
   menu3Name:string,
   onClickMenu1:()=>void,
   onClickMenu2:()=>void,
   onClickMenu3:()=>void
}

@observer
class MenuBar extends Component<MenuBarProps>{
   @observable selectedMenu
   constructor(props) {
      super(props)
      this.selectedMenu = this.props.menu
   }
   onclickMenu1 = () => {
      this.selectedMenu = menus.menu1
      this.props.onClickMenu1()
   }
   onclickMenu2 = () => {
      this.selectedMenu = menus.menu2
      this.props.onClickMenu2()
   }
   onclickMenu3 = () => {
      this.selectedMenu = menus.menu3
      this.props.onClickMenu3()
   }
   render() {
      const { menu1, menu2, menu3 } = menus
      const { menu1Name, menu2Name, menu3Name } = this.props
      return (
         <Layout>
            {this.selectedMenu && (
               <>
                  <Button
                     onClick={this.onclickMenu1}
                     name={menu1Name}
                     width={width}
                     variant={
                        this.selectedMenu.match(menu1)
                           ? COLORS.brightBlue
                           : COLORS.white
                     }
                     color={
                        this.selectedMenu.match(menu1)
                           ? COLORS.white
                           : COLORS.black
                     }
                  />
                  <Button
                     onClick={this.onclickMenu2}
                     name={menu2Name}
                     width={width}
                     variant={
                        this.selectedMenu.match(menu2)
                           ? COLORS.brightBlue
                           : COLORS.white
                     }
                     color={
                        this.selectedMenu.match(menu2)
                           ? COLORS.white
                           : COLORS.black
                     }
                  />
                  <Button
                     onClick={this.onclickMenu3}
                     name={menu3Name}
                     width={width}
                     variant={
                        this.selectedMenu.match(menu3)
                           ? COLORS.brightBlue
                           : COLORS.white
                     }
                     color={
                        this.selectedMenu.match(menu3)
                           ? COLORS.white
                           : COLORS.black
                     }
                  />
               </>
            )}
         </Layout>
      )
   }
}

export { MenuBar }
