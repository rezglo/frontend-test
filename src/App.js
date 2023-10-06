import React, { useState, useEffect, useMemo } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, theme, Avatar, Typography, Button, notification, Tooltip } from 'antd';
import { useSelector } from 'react-redux';

import MenuApp from './components/MenuApp';
import Channel from './containers/Channels/Channel';
import Users from './containers/Users/Users';
import Login from './components/Login/Login';
import { setIsAuthenticatedAction } from './containers/Login/reducers/isAuthenticatedReducer';
import { openNotificationSuccess } from './utils';

const { Title, Text } = Typography;
const { Header, Sider, Content } = Layout;

const Context = React.createContext({
  name: 'Default',
});

const App = () => {

  const isAuthenticated = useSelector((state) => state.isAuthenticated.value);
  const logingUserData = useSelector((state) => state?.loging?.value);
  
  const [collapsed, setCollapsed] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    openNotificationSuccess(api, 'top', "authenticated user",  "Welcome to the FrontEnd/Test system.");   
  }, []);

  useEffect(() => {
    navigate('/');    
  }, [isAuthenticated]);

  const onLogout = () => {
    dispatch(setIsAuthenticatedAction(false));
  };

  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );

  return (
    <>
          {!isAuthenticated &&
            <Routes>
                <Route path='/' element={<Login />} />                    
            </Routes>
          }
        
          {isAuthenticated  &&
            <Context.Provider value={contextValue}>        
              {contextHolder} 
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
                      src={logingUserData?.avatar}
                    >
                    </Avatar>
                    
                    <span className='user-info'>
                      <Title level={5}>{logingUserData?.name}</Title>           
                      <Text type="secondary">{logingUserData?.email}</Text>    
                    </span>

                    <Tooltip placement="topRight" title="Logout">                                                   
                      <Button className="btn-logout" onClick={onLogout} type="primary" >
                        <LogoutOutlined />
                      </Button>
                    </Tooltip> 
        
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
            </Context.Provider> 
          }      
    </>
  );
};

export default App;






