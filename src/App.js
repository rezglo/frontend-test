import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, theme, Avatar, Typography } from 'antd';
import { useSelector } from 'react-redux';

import MenuApp from './components/MenuApp';
import Channel from './containers/Channels/Channel';
import Users from './containers/Users/Users';
import Login from './components/Login/Login';

const { Title, Text } = Typography;
const { Header, Sider, Content } = Layout;

const App = () => {

  const isAuthenticated = useSelector((state) => state.isAuthenticated.value);
  
  const [collapsed, setCollapsed] = useState(false);
  let navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    navigate('/');    
  }, [isAuthenticated]);

  return (
    <>        
        {!isAuthenticated &&
          <Routes>
              <Route path='/' element={<Login />} />                    
          </Routes>
        }
      
        {isAuthenticated  &&
          <Layout> 
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <span className='title-side-bar'>{collapsed ? 'REZGLO' : 'REZGLO FRONTEND TEST'} </span>
            <MenuApp />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
  
              <Avatar
                style={{
                  verticalAlign: 'middle',
                }}
                size="large"
                src="transmitter.png"
              >
              </Avatar>
              <span className='user-info'>
                <Title level={5}>Addiel Velazco Padilla</Title>           
                <Text type="secondary">avpadilla@localhost.com</Text>         
              </span>
  
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route path='/channel' element={<Channel />} />
                <Route path='/users' element={<Users />} />
              </Routes>                          
            </Content>
          </Layout> 
          </Layout>
        }      
    </> 
  );
};

export default App;






