import { useState, useEffect  } from 'react';
import "./styles.scss";
import { Button, Layout, theme } from "antd";  
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";
import DataTableEdit from "./components/home/DataTable"
import ChartConsultation from "./components/home/report/charts/ChartConsultations"
import Calendar from "./components/Calendar";
import { auth } from "../../services/firebase";
import Perfil from "./components/home/perfil/perfil";
import api from '../../api';
import PerfilUser from "./components/home/perfil/perfilUser";

const { Header, Sider } = Layout;
export function Home (){
    //const [user, setUser] = useState({});
    const [darkTheme, setDarkTheme] = useState(true)
    const [collapsed, setCollapsed] = useState(false)


    const postAuthentication = async (data) => {
      console.log("Data", data)
      await api.post('user/authentication', data)
        .then(function(response){
          if(response == 200){
            console.log("Api executada com sucesso");
          }
        }).catch(function(error){
          console.log("Erro ao executar API" + error);
        });
    }

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }    
    
    //deslogar da pagina
    function logout() {
      auth.signOut().then(() => {
          window.location.href = "/";
      }).catch(() => {
          alert('Erro ao fazer logout');
      })
    }



    //Pega asinformacoes do usuario logado
    const [user, setUser] = useState(null);
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // O usuário está autenticado, você pode acessar as informações do usuário diretamente
          const { uid, displayName, email, photoURL } = user;        
          const data = {
            "uid": uid,
            "name": displayName,
            "email": email,
            "photoURL": photoURL
          }       

          // Atualize o estado do usuário
          setUser(user);

          console.log(data);
          postAuthentication(data);
        } else {
          // O usuário não está autenticado, limpe as informações do usuário
          setUser(null);
        }
      });

    // O retorno de useEffect é chamado quando o componente é desmontado
    return () => unsubscribe();
    }, []);
        
    const {
        token: { colorBgContainer },
      } = theme.useToken()
        return (
          <>
            <Layout>
              <Sider 
                collapsed={collapsed}  
                collapsible 
                trigger={null}
                theme={darkTheme ? 'dark' : 'light'} 
                className="sidebar">
                <Logo />
                <MenuList darkTheme={darkTheme}></MenuList>
                <ToggleThemeButton darkTheme={darkTheme}
                toggleTheme={toggleTheme}></ToggleThemeButton>
              </Sider>
              <Layout>                
               <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button 
                    type="text"
                    className="toggle"
                    onClick={()=> setCollapsed(!collapsed)}
                    icon={collapsed ?
                    <MenuUnfoldOutlined></MenuUnfoldOutlined> : 
                    <MenuFoldOutlined></MenuFoldOutlined>}>              
                  </Button>
                  <Button className="btn-logout" onClick={logout}>
                        Sair
                  </Button>
                </Header>
      
                <div className="title-perfil">
                <h3>Perfil</h3>
                  <Perfil/>  
                </div>

                <div className="title-perfilUser">
                  <h3>Perfil Usuario</h3>
                  <PerfilUser/>  
                </div>

                <div className="title-calendar">
                  <h3>Calendar</h3>
                  <Calendar/>  
                </div>     

                <div className="title-chart-consultation">
                  <h3>Consultas</h3>
                  <ChartConsultation/>  
                </div>     
      
                <div className="title-client">
                  <h3>Cliente</h3>
                  <DataTableEdit/> 
                </div>

                
      
                    
      
            </Layout>
        </Layout>
       </>
    )
}
      
export default Home