import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './../statics/styles/layout.less'
import { Link } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class SiderCustom extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Menu.Item>
            <SubMenu key="sub2" title={<span><Icon type="team" /><span>用户管理</span></span>}>
              <Menu.Item key="6"><Link to='/department'>部门</Link></Menu.Item>
              <Menu.Item key="7"><Link to='/role'>角色</Link></Menu.Item>
              <Menu.Item key="8"><Link to='/users'>用户</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default SiderCustom;