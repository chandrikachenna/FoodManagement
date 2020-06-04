import React, { Component } from 'react'
import { Layout, Text } from './styledComponents'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import {Button} from '../../../../Common/components/Button';
import {COLORS} from '../../../../Common/theme/Colors';

const menus={"menu1":"Menu1","menu2":"Menu2","menu3":"Menu3"}
const width='102px';

@observer
class MenuBar extends Component {
   @observable selectedBtn
   constructor(props){
       super(props)
       this.selectedBtn=this.props.tab
   }
   onclickMenu1 = () => {
      this.selectedBtn = menus.menu1
      this.props.onClickMenu1()
   }
   onclickMenu2 = () => {
      this.selectedBtn = menus.menu2
      this.props.onclickMenu2()
   }
   onclickMenu3 = () => {
      this.selectedBtn = menus.menu3
      this.props.onclickMenu3()
   }
   render() {
       const {menu1,menu2,menu3}=menus
       const {menu1Name,menu2Name,menu3Name}=this.props;
      return (
         <Layout>
            <Button
                  onClick={this.onclickMenu1}
                  name={menu1Name}
                  width={width}
                  variant={this.selectedBtn.match(menu1) ? COLORS.brightBlue : COLORS.white}
                  color={this.selectedBtn.match(menu1) ? COLORS.white : COLORS.black}
               />
            <Button
                  onClick={this.onclickMenu2}
                  name={menu2Name}
                  width={width}
                  variant={this.selectedBtn.match(menu2) ? COLORS.brightBlue : COLORS.white}
                  color={this.selectedBtn.match(menu2) ? COLORS.white : COLORS.black}
               />
            <Button
                  onClick={this.onclickMenu3}
                  name={menu3Name}
                  width={width}
                  variant={this.selectedBtn.match(menu3) ? COLORS.brightBlue : COLORS.white}
                  color={this.selectedBtn.match(menu3) ? COLORS.white : COLORS.black}
               />
         </Layout>
      )
   }
}

export { MenuBar }
