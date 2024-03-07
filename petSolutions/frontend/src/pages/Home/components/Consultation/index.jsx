import React from 'react';
import { Form, Input, InputNumber, DatePicker, Button } from 'antd';
//import api from '../../../../../../src/api';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const Consultation = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /*const notify = () => toast("Sucesso");
  const notifyErro = () => toast.error("Erro");

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
  
  const onFinish = async (values) => {
    try {
      const data = {
        ...values.pet,
        Uid: sessionStorage.getItem("pet"),
      };
  
      //data.id = idPet;
      await updatePet(data);
    } catch (error) {
      console.log(error);
      notifyErro(); // Notifica erro
    }
  };
  
  const updatePet = async (data) => {
    try {
      data.Id = dataPet.dataPet.Id;
      console.log(data);
      const response = await api.patch(`pet/updatePet`, data);
      console.log(response);
      // Verifica se a atualização foi bem-sucedida
      if (response.status === 200) {
        notify(); // Notifica sucesso
        
      } else {
        notifyErro(); // Notifica erro
      }
      console.log("Apos response data: ",data);
    } catch (error) {
      console.log(error);
      notifyErro(); // Notifica erro
    }
  };
  

  //console.log("dataPet::",dataPet);
  console.log("dataPet.id::",dataPet.dataPet.Id);*/

  
return (
    <div>

        <div  className="container-consultation-list">
          <div className="container-img-consultation">    
            <img
              className='img-consultation'
              src={'https://cdn-icons-png.flaticon.com/512/87/87971.png'}
              width={310}
              height={310}
            />
          </div>
          <div className="infos-consultation">
            <ul>
              <li>
                <h3>Consulta realizada!</h3>
              </li>
              <br></br>
              <li>
                <p><strong>Nome:</strong> Dog </p>
              </li>
              <li>
                <p><strong>Data Consulta:</strong> 17/03/2024 </p>
              </li>
              <li>
                <p><strong>Data Retorno:</strong>29/03/2024 </p>
              </li>
              <li>
                <p><strong>Tratamento:</strong> Nenhum </p>
              </li>
              <li>
                <p><strong>Detalhe tratamento:</strong> Nenhum </p>
              </li>
              <li>
                <p><strong>Exames</strong> Nenhum </p>
              </li>
              <li>
                <p><strong>Prescrição:</strong> Vacina  </p>
              </li>
              <li>
                <p><strong>Obs.:</strong> Dog em condição boa </p>
              </li>
            </ul>
          </div>
        </div>       

      
    </div>
  );
}

export default Consultation;
