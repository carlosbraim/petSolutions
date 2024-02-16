import './perfilUser.scss'
import api from '../../../../../../src/api'
import { useState, useEffect  } from 'react';
import { auth } from "../../../../../services/firebase";


function PerfilUser() {
    //Pega as informacoes do usuario logado
    const [userDados, setUserDados] = useState(null);
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // O usuário está autenticado, você pode acessar as informações do usuário diretamente
          const { uid} = user;
          const data = {
            "uid": uid
          }

          // Atualize o estado do usuário
         // setUser(user);
          getUser(uid);
        } else {
          // O usuário não está autenticado, limpe as informações do usuário
          setUserDados(null);
        }
      });

    // O retorno de useEffect é chamado quando o componente é desmontado
    return () => unsubscribe();
    }, []);

    const getUser = async (uid) => {
        try {
          const response = await api.get(`user/getUser?uid=${uid}`);
          console.log(response)
          const data = response.data;
          console.log(data);
          setUserDados(data);
          console.log(userDados?.PhotoURL)
          //setSupplier(data);
        } catch (error) {
           console.log(error);
        }
      };

    return(
        <div className="container-perfilUser">
            <div className="header">                
                <img src={userDados?.PhotoURL}
                    width={10}
                    height={10}            
                />          
            </div>
            <div className="infosUser">   
                <div>
                    <h1>Perfil</h1>
                    <h2>Foto </h2>
                </div>         
                <ul>                        
                    <li>
                    <h3>Dados do Usuario</h3>                            
                    </li>
                    <br></br>
                    <li>
                        <p><strong>Nome:</strong>{userDados?.Nome}</p>  
                    </li>
                    <li>
                        <p><strong>Email:</strong> {userDados?.Email}</p>                          
                    </li>                
                </ul>           
            </div>
        </div>  
    )
}
export default PerfilUser