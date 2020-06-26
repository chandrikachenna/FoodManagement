import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Header, Content } from './styledComponents'
import { MenuBar } from '../MenuBar'
import { DatePicker } from '../../../../Common/components/DatePicker'

const menus = { menu1: 'Menu1', menu2: 'Menu2', menu3: 'Menu3' }

interface MenuDisplayerProps{
   menu:string,
   menu1Name:string,
   menu2Name:string,
   menu3Name:string,
   data:Array<object>,
   renderedComponent:Function
}

@observer
class MenuDisplayer extends Component<MenuDisplayerProps>{
   @observable selectedMenu
   constructor(props) {
      super(props)
      this.selectedMenu = this.props.menu
   }
   onClickMenu1 = () => {
      this.selectedMenu = menus.menu1
   }
   onClickMenu2 = () => {
      this.selectedMenu = menus.menu2
   }
   onClickMenu3 = () => {
      this.selectedMenu = menus.menu3
   }
   render() {
      const {
         menu,
         menu1Name,
         menu2Name,
         menu3Name,
         data,
         renderedComponent: RenderedComponent
      } = this.props
      return (
         <>
            <Header>
               <MenuBar
                  menu={menu}
                  menu1Name={menu1Name}
                  menu2Name={menu2Name}
                  menu3Name={menu3Name}
                  onClickMenu1={this.onClickMenu1}
                  onClickMenu2={this.onClickMenu2}
                  onClickMenu3={this.onClickMenu3}
               />
               <DatePicker onChangeDate={()=>{}} date={new Date()}/> 
            </Header>
            {this.selectedMenu && (
               <Content>
                  {this.selectedMenu.match(menus.menu1) && (
                     <RenderedComponent data={data[0]} />
                  )}
                  {this.selectedMenu.match(menus.menu2) && (
                     <RenderedComponent data={data[1]} />
                  )}
                  {this.selectedMenu.match(menus.menu3) && (
                     <RenderedComponent data={data[2]} />
                  )}
               </Content>
            )}
         </>
      )
   }
}

export { MenuDisplayer }
