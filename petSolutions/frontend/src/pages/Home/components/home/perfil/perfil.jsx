import React, { useState } from 'react';
import './perfil.scss';
import { EditOutlined } from '@ant-design/icons';
import EditPerfilPet from '../perfil/EditPerfilPet'; // Certifique-se de ajustar o caminho

function Perfil() {
    const [editing, setEditing] = useState(false); // Adiciona o estado 'editing'

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleCancelEdit = () => {
        setEditing(false);
    };

    if (editing) {
        return <EditPerfilPet onCancelEdit={handleCancelEdit} />;
    }

    return (
        <div className="container-perfil">
            <div className="header">
                <div>
                    <h1>Zeus</h1>
                    <div className='BtnEdit'>
                        <EditOutlined onClick={handleEditClick} />
                    </div>
                    <h2>Estava com saudade </h2>
                </div>
                <img className='imgPerfilPet'
                    src="https://img.freepik.com/fotos-premium/filhote-de-cachorro-pastor-alemao-na-frente-de-um-fundo-branco_87557-21566.jpg?w=360"
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
                        <p><strong>Idade:</strong> 5 mese</p>
                    </li>
                    <li>
                        <p><strong>Raça:</strong> Pastor Alemão</p>
                    </li>
                    <li>
                        <p><strong>Peso:</strong> 13,5 kg em 10/01/2024</p>
                    </li>
                    <li>
                        <p><strong>Ultima consulta:</strong> 07/01/2024 </p>
                    </li>
                    <li>
                        <p><strong>Obs.:</strong> É importante sempre atualizar as informações do seu pet, pois ele tem apenas você como papai e mamãe </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Perfil;
