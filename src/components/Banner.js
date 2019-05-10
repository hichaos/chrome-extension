import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';

import 'rc-banner-anim/assets/index.css';
import '../css/Banner.css';

const BgElement = Element.BgElement

export default class Banner extends React.Component {

  render(){
    return (
      <BannerAnim ref={(c) => { this.banner = c }} 
        initShow={this.props.displayEnv === 'A' ? 0 : 1} 
        prefixCls="banner-user" 
        arrow={false} 
        thumb ={false} 
        dragPlay={false} 
        onClick={() => {this.props.toggleEnv();this.banner.next();}} >
        <Element 
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#364D79',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            A
          </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="1"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            B
          </TweenOne>
        </Element>
      </BannerAnim>);
  }
}