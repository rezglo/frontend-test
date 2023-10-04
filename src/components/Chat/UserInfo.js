/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { CloseOutlined, PhoneOutlined ,MailOutlined } from '@ant-design/icons';
import {  
  Space, 
  Col, 
  Row, 
  Button,
  Drawer
} from 'antd';

const UserInfo = ({
  onClose,
  open,
  userSelected
}) => { 

  const [placement] = useState('right');

  return (
        <Drawer
            className='drawer-user-profile'
            title="Profile"
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            width={320}
            extra={
              <Space>
                <Button onClick={onClose}><CloseOutlined /></Button>
              </Space>
            }
          >          
            <img
                className='profile'
                src="/avatar.png"
                width={320}
                height={320}
                alt="Picture of the author"
            />
            <Row className='contaiener-drawer-user-info'>
              <Col span={4}><PhoneOutlined /></Col>
              <Col span={20}><h3>{userSelected?.phone}</h3></Col>
            </Row>
            <Row className='contaiener-drawer-user-info'>
              <Col span={4}><MailOutlined /></Col>
              <Col span={20 }><h3>{userSelected?.email}</h3></Col>
            </Row>  
        </Drawer>
  );
};
export default UserInfo;
