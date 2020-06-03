import React, { Component } from 'react'
import { Area, RandomText } from './styledComponents'
import strings from '../../i18n/strings.json'
class TextArea extends Component {
   render() {
      return (
         <Area>
            {/* <RandomText>{'fds'}</RandomText> */}
            {/* {'Write Review'} */}
            <span>text</span>
         </Area>
      )
   }
}

export { TextArea }
