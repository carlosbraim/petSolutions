import React from 'react';
import './styles.scss'

export function Setting(){
    
    


    
    return (
      
            <div className="primary-field-setting">
                <div className="setting">                  
                    <div className="setting-camp">
                         

                        <div className="box-container-setting">
                            <p className="box-text-setting">Aqui, você tem total controle sobre a aplicação, podendo ajustar os dados do seu pet e as suas informações pessoais. Sinta-se à vontade para fazer as alterações necessárias e personalizar conforme suas preferências.</p>
                        
                        
                            <div className='img-setting-btn'>
                                <div className='img-perfil-setting'>
                                    <button className='transparent-button'>
                                        <img
                                            className='imgPerfilPet'
                                            src="https://static.vecteezy.com/ti/vetor-gratis/p3/7120890-ilustracao-de-uma-silhueta-de-um-cao-e-gato-vetor.jpg"
                                            alt="Perfil Pet"
                                            width={150}
                                            height={150}
                                        />
                                    </button>
                                    <p>Perfil pet</p>
                                </div>
                                <div className='img-perfil-user-setting'>
                                    <button className='transparent-button'>
                                        <img
                                            className='imgPerfilPet'
                                            src="https://static.thenounproject.com/png/638636-200.png"
                                            alt="Perfil Usuario"
                                            width={150}
                                            height={150}
                                        />
                                    </button>
                                    <p>Perfil Usuario</p>
                                </div>
                            </div>                           
                        </div>                                      
                    </div>            
                </div>
            </div>  
           
     
    )    
}


export default Setting;