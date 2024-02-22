import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import '../perfil/editPerfilUser'
import api from '../../../../../../src/api'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
  let data = Object.fromEntries(
    Object.entries(values.user).filter(([key, value]) => value !== undefined && value !=='' && value !== null)
  );

  data['Uid'] = sessionStorage.getItem("user");
  console.log("Data perfil user",data)
  updateUser(data)
};

const updateUser = async (data) => {
  try {
      const response = await api.patch(`user/updateUser`,data); 
      console.log(response);
  } catch (error) {
      console.log(error);
  }
};

const EditPerfilUser = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'Nome']}
      label="Nome"
    >
    <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'Email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default EditPerfilUser;