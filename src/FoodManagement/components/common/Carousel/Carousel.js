import React from 'react'
import './Carousel.css'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
import Layout1 from '../../../../Common/images/layout1.png'
import Layout2 from '../../../../Common/images/layout2.png'

const BgElement = Element.BgElement
class Carousel extends React.Component {
   render() {
      return (
         <BannerAnim prefixCls='banner-user' autoPlay>
            <Element prefixCls='banner-user-elem' key='0'>
               <BgElement
                  key='bg'
                  className='bg'
                  style={{
                     backgroundImage: `url(${Layout1})`
                  }}
               />
               <TweenOne
                  className='banner-user-title'
                  animation={{ y: 30, opacity: 0, type: 'from' }}
               >
                  Announcement
                  <p
                     style={{
                        fontSize: '13px'
                     }}
                  >
                     Weekly Menu Changed
                  </p>
               </TweenOne>
               <TweenOne
                  className='banner-user-text'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  Idly has been Updated with poori on monday due to requests
                  from south Indians
               </TweenOne>
            </Element>
            <Element prefixCls='banner-user-elem' key='1'>
               <BgElement
                  key='bg'
                  className='bg'
                  style={{
                     backgroundImage: `url(${Layout2})`
                  }}
               />
               <TweenOne
                  className='banner-user-title'
                  animation={{ y: 30, opacity: 0, type: 'from' }}
               >
                  Announcement
                  <p
                     style={{
                        fontSize: '13px'
                     }}
                  >
                     Weekly Menu Change
                  </p>
               </TweenOne>
               <TweenOne
                  className='banner-user-text'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  <p
                     style={{
                        fontSize: '13px'
                     }}
                  >
                     Idly has been Updated with poori on monday due to requests
                     from south Indians
                  </p>
               </TweenOne>
            </Element>
         </BannerAnim>
      )
   }
}
export { Carousel }
