import { Tabs, Alert  } from 'antd'
import React from 'react'
const { TabPane } = Tabs


class HelloWorld extends React.Component {
  callback(key) {
    console.log(key);
  }
  afterClose() {
    console.log(132)
  }
  render () {
    return (
      <React.Fragment>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">
              <Alert message="Success Text" type="success" closable afterClose={this.onClose} showIcon banner closeText="关闭"/>
              <h1>placeholder</h1>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
      </React.Fragment>
    )
  }
}

export default HelloWorld
