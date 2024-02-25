import React from 'react';
import { Menu } from 'antd';
import { 
  HomeOutlined,
  AppstoreOutlined, 
  AreaChartOutlined, 
  UserOutlined, 
  SettingOutlined,
  BarsOutlined,
  CalendarOutlined
} from '@ant-design/icons';

const MenuList = ({ darkTheme, onMenuClick }) => {
  const handleClick = ({ key }) => {
    onMenuClick(key);
  };

  return (
    <Menu 
      theme={darkTheme ? 'dark' : 'light'} 
      mode="inline" 
      className="menu-bar"
      onClick={handleClick} // Adiciona a função de clique
    >
      <Menu.Item key="home" icon={<HomeOutlined/>}>
        Home
      </Menu.Item>
      <Menu.Item key="perfil" icon={<AppstoreOutlined/>}>
        Perfil Pet
      </Menu.Item>
      <Menu.SubMenu 
        key='tasks' 
        icon={<BarsOutlined></BarsOutlined>} 
        title="Tasks"
      >
        <Menu.Item key="task-1">Task 1</Menu.Item>
        <Menu.Item key="task-2">Task 1</Menu.Item>
        <Menu.SubMenu key="subtasks" title="Subtasks">
          <Menu.Item key="subtasks-1">subtasks 1</Menu.Item>
          <Menu.Item key="subtasks-2">subtasks 2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="chartConsultation" icon={<AreaChartOutlined/>}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="calendar" icon={<CalendarOutlined/>}>
        Calendar
      </Menu.Item>
      <Menu.Item key="perfilUser" icon={<UserOutlined />}>
        Perfil User
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined/>}>
        Configuração
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
