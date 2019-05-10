import React from 'react'
import { Tabs, message } from 'antd'
import { assembleRpcUrl, assembleEndpointUrl, slice, isEmpty, uniq } from './Common'
import axios from 'axios'
import moment from 'moment';

import '../css/View.css'

export default class View extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="div-view">
        New
      </div>
    );
  }
}