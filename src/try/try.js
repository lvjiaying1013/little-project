import React from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.less';
import './try.less'

export default class Try extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }
  }
  UNSAFE_componentWillMount() {
    let url = '/secondarydealpackage';
    var opts = {
      method:'GET',
    };
    fetch(url+'?merchantId=102618650').then(response => response.json())//解析为可读数据
    .then(data => {
      this.setState({info: data.data.dealPackage});
    }
    )//执行结果是 resolve就调用then方法
    .catch(err => console.log("Oh, error", err))//执行结果是 reject就调用catch方法
  }
  render(){
    console.log(this.state.info, 'heihei');
    return <div>
      {this.state.info.map((item, index) => (
        <div className='botton' key={index}><Button type="primary">{item.title}</Button></div>
        ))}
    </div>
  }
}