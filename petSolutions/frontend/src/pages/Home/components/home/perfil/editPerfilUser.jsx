import React from 'react';
import { Button, Form, Input } from 'antd';
import api from '../../../../../../src/api';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const onFinish = async (values) => {
  try {
    const data = {
      ...values.user,
      Uid: sessionStorage.getItem("user"),
    };

    await updateUser(data);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (data) => {
  try {
    const response = await api.patch(`user/updateUser`, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const EditPerfilUser = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh',marginLeft: '400px', marginBottom: '300px' }}>
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <div style={{ display: 'flex', marginBottom: '16px', alignItems: 'center' }}>
        <div style={{ marginRight: '24px', overflow: 'hidden', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid #ddd' }}>
          <img
            src="https://static.thenounproject.com/png/638636-200.png"
            alt="Imagem Ilustrativa"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
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
        </div>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default EditPerfilUser;
