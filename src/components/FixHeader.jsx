import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { Breadcrumb } from 'antd';
import './../statics/styles/header.less'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

// 头像

class FixHeader extends React.Component {
  render() {
      return (
        <div className="header">
            <Layout>
                <Sider>
                    <Breadcrumb id="bread">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                        <Breadcrumb.Item>角色</Breadcrumb.Item>
                    </Breadcrumb>
                </Sider>
                <Content>
                    <Button id="login">登录</Button>
                </Content>
            </Layout>
        </div>
      )
  }
}

export default FixHeader;