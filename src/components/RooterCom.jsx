import React from 'react';
import SiderCustom from './SiderCustom'
import FixHeader from './FixHeader'
import Main from './Main'
import './../statics/styles/outerbox.less'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class RooterCom extends React.Component {
  render() {
      return (
          <div>
                <Layout>
                    <Sider><SiderCustom/></Sider>
                    <Layout>
                        <Header><FixHeader/></Header>
                        <Main/>
                    </Layout>
                </Layout>
          </div>
      )
  }
}

export default RooterCom;