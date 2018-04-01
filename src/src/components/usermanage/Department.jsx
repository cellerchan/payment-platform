import React from 'react';
import { Form, Input, Modal, Button, Table, Icon, Divider } from 'antd';
import './../../statics/styles/form_table.less'

const confirm = Modal.confirm;

const FormItem = Form.Item;

// 添加部门
function addDepartment () {
    Modal.info({
        title: '添加部门',
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
        onOk () {

        }
    });
}

// 删除
function deleteInfo() {
    confirm({
      title: '确定要删除吗',
      content: '删除后不可恢复',
      okText: '是',
      okType: 'danger',
      cancelText: '否',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

// 查看
function viewInfo () {
    Modal.info({
      title: '部门信息',
      content: (
        <div>
            查看信息
        </div>
      ),
      onOk() {},
    });
  }



const columns = [{
    title: '部门',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: '机构代码',
    dataIndex: 'codeNum',
    key: 'codeNum',
  }, {
    title: '上级组织',
    dataIndex: 'auth',
    key: 'auth',
  },
  {
    title: '创建时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button onClick={viewInfo}>查看</Button>
        <Divider type="vertical" />
        <Button>修改</Button>
        <Divider type="vertical" />
        <Button>编辑</Button>
        <Divider type="vertical" />
        <Button onClick={deleteInfo} type="dashed">删除</Button>
      </span>
    ),
  }];

  const data = [{
    key: '1',
    name: '技术部',
    codeNum: 32,
    auth: 'unknown',
    time: '2018-02-09',
    address: 'New York No. 1 Lake Park',
  }, {
    key: '1',
    name: '产品部',
    codeNum: 13,
    auth: 'unknown',
    time: '2017-09-10',
    address: 'New York No. 1 Lake Park',
  }, {
    key: '1',
    name: '运营部',
    codeNum: 23,
    auth: 'unknown',
    time: '2018-03-22',
    address: 'New York No. 1 Lake Park',
  }, {
    key: '1',
    name: '监察部',
    codeNum: 4,
    auth: 'unknown',
    time: '2018-01-19',
    address: 'New York No. 1 Lake Park',
  }];

class Department extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      }
  render() {
      return (
            <div>
                <Button type="primary" id="add-button" onClick={addDepartment}>添加部门</Button>
                <Table columns={columns} dataSource={data} />
            </div>
      )
  }
}

export default Department;