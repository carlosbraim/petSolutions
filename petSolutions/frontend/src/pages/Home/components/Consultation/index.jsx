import { useState } from 'react';
import { Form, Input, InputNumber, DatePicker, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
//import api from '../../../../../../src/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';
import EditConsultation from './editConsultation';

const Consultation = () => {

  const [editing, setEditing] = useState(false); // Adiciona o estado 'editing'

  const handleEditClick = (id) => {
    setEditing(true);
    setIdPet(id);
};

const handleCancelEdit = () => {
    setEditing(false);
};

if (editing) {
    return <EditConsultation onCancelEdit={handleCancelEdit} />;
}


  
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
            <EditOutlined onClick={() => handleEditClick()} />
          </div>
        </div>        
    </div>
  );
}

export default Consultation;
