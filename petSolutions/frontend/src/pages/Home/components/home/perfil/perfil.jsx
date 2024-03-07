import { useState, useEffect } from 'react';
import './perfil.scss';
import { EditOutlined } from '@ant-design/icons';
import EditPerfilPet from '../perfil/EditPerfilPet'; 
import api from '../../../../../../src/api'
import { auth } from "../../../../../services/firebase";

function Perfil() {
    const [petDados, setPetDados] = useState([]);
    const [editing, setEditing] = useState(false); // Adiciona o estado 'editing'
    const [idPet, setIdPet] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((pet) => {
            if (pet) {
                const { uid } = pet;
                const data = {
                    "uid": uid
                };
                console.log("Uid para o PET",uid)
                getPet(uid);
            }
        });

        return () => unsubscribe();
    }, []);

    //requisicao
    const getPet = async (uid) => {
        try {
            const response = await api.get(`pet/getPet?uid=${uid}`);
            const data = response.data;
            setPetDados(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = (id) => {
        setEditing(true);
        setIdPet(id);
    };

    const handleCancelEdit = () => {
        setEditing(false);
    };

    if (editing) {
        return <EditPerfilPet dataPet={idPet} onCancelEdit={handleCancelEdit} />;
    }

    return (
        <div>
          {petDados.map((petDados, index) => (
            <div key={index} className="container-perfil">
              <div className="header">
                <div>
                  <h1>{petDados?.Nome}</h1>
                  <div className='BtnEdit'>
                    <EditOutlined onClick={() => handleEditClick(petDados)} />
                  </div>
                  <h2>{petDados?.Descricao}</h2>
                </div>    
                <img
                  className='imgPerfilPet'
                  src={petDados?.PhotoUrl}
                  width={310}
                  height={310}
                />
              </div>
              <div className="infos">
                <ul>
                  <li>
                    <h3>Dados do meu pet</h3>
                  </li>
                  <br></br>
                  <li>
                    <p><strong>Idade:</strong> {petDados?.Idade} </p>
                  </li>
                  <li>
                    <p><strong>Raça:</strong> {petDados?.Raca}</p>
                  </li>
                  <li>
                    <p><strong>Peso:</strong> {petDados?.Peso}</p>
                  </li>
                  <li>
                    <p><strong>Ultima consulta:</strong> {petDados?.UltimaConsulta} </p>
                  </li>
                  <li>
                    <p><strong>Obs.:</strong> {petDados?.Obs} </p>
                  </li>
                </ul>
              </div>
            </div>
            
          ))}
          
        </div>
      );
}

export default Perfil;
