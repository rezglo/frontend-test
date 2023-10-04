/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import axios from "axios";
import { 
  Col, 
  Row, 
  Card,
  Button, 
  Checkbox, 
  Form, 
  Input,
  notification
} from 'antd';

import { saveLoginData } from '../../containers/Login/reducer'
import { openNotificationSuccess } from '../../utils';
import { URL_BASE } from '../../constants';

const Context = React.createContext({
  name: 'Default',
});

const Login = () => {

  const [setLogin] = useState();
  const [isLogining, setIsLoginig] = useState(false);  

  const [api, contextHolder] = notification.useNotification();
  let navigate =useNavigate();
  const dispatch = useDispatch()

  const onFinish = (values) => {
    getLogin();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const getLogin = () => {
    setIsLoginig(true);
    
    axios.get(`${URL_BASE}/login`).then((response) => {
      setTimeout(() => {   
          dispatch(saveLoginData(response.data.data))   
          setAuthenticatedForCurrentUser({ status: true});
          setLogin(response.data);
          setIsLoginig(false);
          openNotificationSuccess(api, 'top', "authenticated user",  "Welcome to the FrontEnd/Test system.");
          navigate('/')
        }, 2000);
    }).catch(error => {
          console.log("error", error);
    });
  };

  const setAuthenticatedForCurrentUser = (data) => {
    axios.put(`${URL_BASE}/isAuthenticated`, data).then((response) => {
        console.log("The user is authenticated");
    }).catch(error => {
        console.log("error", error);
    });
  };

  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );

  return (
    <>  
      <Context.Provider value={contextValue}>
        {contextHolder} 
          <Row className='contaiener-login'>
            <Col xs={24} sm={12} md={12} lg={8} xl={6}>   
              <Card>
                <img src="/Login.png" alt="Login"/>
                <h2>LOGIN FRONTEND/TEST</h2>
                <Form
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item                
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input placeholder="Username" disabled={isLogining} />
                  </Form.Item>

                  <Form.Item                
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password" disabled={isLogining} />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button loading={isLogining} type="primary" htmlType="submit">
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
      </Context.Provider>  
    </>
  );
};
export default Login;
