import React from 'react';
import { Form, Input, InputNumber, DatePicker, Button } from 'antd';

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
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const EditPerfilPet = () => (
  <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '500px', marginLeft: '400px', marginTop: '150px' }}>
    {/* Adiciona um marginLeft de 20px para distanciar da esquerda */}
    <Form
      {...layout}
      name="nest-messages"
      style={{
        maxWidth: 600,
        marginBottom: '16px',
      }}
      validateMessages={validateMessages}
    >
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        {/* Adiciona a imagem ao lado de todos os campos */}
        <div style={{ marginRight: '24px', borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px' }}>
          <img
            src="https://static.vecteezy.com/ti/vetor-gratis/p3/7120890-ilustracao-de-uma-silhueta-de-um-cao-e-gato-vetor.jpg"
            alt="Imagem Ilustrativa"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Adiciona todos os campos de edição */}
        <div>
          <Form.Item
            name={['pet', 'Nome']}
            label="Nome"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={['pet', 'idade']}
            label="Idade"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name={['pet', 'data']}
            label="Data de Nascimento"
            labelCol={{ span: 13 }}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name={['pet', 'descricao']}
            label="Descrição"
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name={['pet', 'peso']}
            label="Peso"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name={['pet', 'raca']}
            label="Raça"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={['pet', 'ultimaConsulta']}
            label="Última Consulta"
            labelCol={{ span: 10 }}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name={['pet', 'photoUrl']}
            label="URL da Foto"
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

export default EditPerfilPet;
