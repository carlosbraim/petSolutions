import { useState } from 'react';
import "./styles.scss";
import { Button, Layout, theme } from "antd";  
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";
import DataTableEdit from "./components/home/DataTable"
import ChartConsultation from "./components/home/report/charts/ChartConsultations"
import Calendar from "./components/Calendar";

const { Header, Sider } = Layout;
export function Home (){
    const [user, setUser] = useState({});
    const [darkTheme, setDarkTheme] = useState(true)
    const [collapsed, setCollapsed] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }
      
    function home(){        
        setUser(user);
    }
        
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
                <Header style={{ padding: 0, background: colorBgContainer }}>
                  <Button 
                    type="text"
                    className="toggle"
                    onClick={()=> setCollapsed(!collapsed)}
                    icon={collapsed ?
                    <MenuUnfoldOutlined></MenuUnfoldOutlined> : 
                    <MenuFoldOutlined></MenuFoldOutlined>}>              
                  </Button>
                </Header>
      
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