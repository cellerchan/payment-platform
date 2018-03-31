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
          {/* <FormItem
          {...formItemLayout}   
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem> */}
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
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: '设计部',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: '产品部',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];

class Department extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      }
  render() {
    // const formItemLayout = {
    //     labelCol: {
    //         xs: { span: 24 },
    //         sm: { span: 8 },
    //     },
    //     wrapperCol: {
    //         xs: { span: 24 },
    //         sm: { span: 14 },
    //     },
    // };
    // const tailFormItemLayout = {
    //     wrapperCol: {
    //         xs: {
    //             span: 24,
    //             offset: 0,
    //         },
    //         sm: {
    //             span: 14,
    //             offset: 8,
    //         },
    //     },
    // };
    // const { getFieldDecorator } = this.props.form;
      return (
            <div>
                <Button type="primary" id="add-button" onClick={addDepartment}>添加部门</Button>
                <Table columns={columns} dataSource={data} />
            </div>
      )
  }
}

export default Department;