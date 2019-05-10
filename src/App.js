import React from 'react';
import Banner from './components/Banner';
import Debug from './components/Debug';
import View from './components/View';
import { Row, Col, BackTop } from 'antd';
import moment from 'moment';
import $ from 'jquery';
import { isEmpty } from './components/Common';

import './css/antd.css';
import './css/App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      displayEnv: 'A',
      logPane: {
        activeKey: '',
        paneKeys: [],
        logListPanes: [],
      },
      requestInfo: {
        
      },
      searchConfig: {
        
      },
      displayConfig: {
        
      },
      externalService: {
        
      }
    }
  }

  toggleEnv(){
    switch(this.state.displayEnv){
      case 'A':
        this.setState({ displayEnv: 'B' })
      break;
      case 'B':
        this.setState({ displayEnv: 'A' })
      break;
    }
  }

  componentDidMount(){
  }

  render() {

    return (
      <div className="App">
        <BackTop />
        <Row>
          <Col span={24}>
            <Banner displayEnv = {this.state.displayEnv} toggleEnv = {this.toggleEnv.bind(this)}/>
          </Col>
        </Row>
        <Row gutter={16} type='flex'>
          <Col className="gutter-row">
            <Debug />
          </Col>
          <Col style={{flex: 1, width: '50%'}}>
            <View />
          </Col>
        </Row>
      </div>
    );
  }
}
