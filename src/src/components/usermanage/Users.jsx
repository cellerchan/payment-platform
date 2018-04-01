import React from 'react';
import { Button, Table, Icon, Divider } from 'antd';
import './../../statics/styles/form_table.less'

const columns = [{
    title: '用户',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button>查看</Button>
        <Divider type="vertical" />
        <Button>修改</Button>
        <Divider type="vertical" />
        <Button>编辑</Button>
        <Divider type="vertical" />        
        <Button>删除</Button>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John Resig',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Nicolas',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Shao',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];


class Users extends React.Component {
  render() {
      return (
        <div>
            <Button type="primary" id="add-button">添加用户</Button>
            <Table columns={columns} dataSource={data} />
        </div>
      )
  }
}

export default Users;