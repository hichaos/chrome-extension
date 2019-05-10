import React from 'react';
import { Tabs, Icon } from 'antd';

import '../css/Debug.css';

const TabPane = Tabs.TabPane;

export default class Debug extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    return (
      <div>
        Hello
      </div>
    );
  }
}