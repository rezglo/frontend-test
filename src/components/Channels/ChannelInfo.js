/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { CloseOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import {  
  Space, 
  Col, 
  Row, 
  Button,
  Drawer
} from 'antd';

const ChannelInfo = ({
  onClose,
  open,
  channelSelected
}) => { 

  const [placement] = useState('right');

  return (
        <Drawer
            className='drawer-user-profile'
            title={channelSelected?.name}
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
              <Col span={24}><h5>followers</h5></Col>
              <Col span={4}><UsergroupAddOutlined /></Col>
              <Col span={20}><h3>{channelSelected?.numberFollowers}</h3></Col>
            </Row> 
        </Drawer>
  );
};
export default ChannelInfo;
