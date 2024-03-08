import React, { useState } from 'react';
import { Form, Input, InputNumber, DatePicker, Button, Radio } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importe o locale para português do Brasil
import "./styles.scss";

moment.locale('pt-br'); // Defina o locale para português do Brasil

const PageHome = () => {


  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '500px', marginLeft: '400px', marginTop: '150px' }}>
      <img
            src="https://media.istockphoto.com/id/1290489690/pt/vetorial/cat-and-dog-paw-print-pets-or-animals-paw-trail-vector-illustration.jpg?s=170667a&w=0&k=20&c=L864OPIxI2WecHjAjAidYvJxPC1pzNVYedHM0IbpSLM="
            alt="Imagem Ilustrativa"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        
          
      </div>
    </>
    
  );
};

export default PageHome;
