import React from 'react';
import {
  ClusterOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';

import Icon from '@ant-design/icons';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const MenuApp = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['0']}
    >
      <Menu.Item key="1">
        <Icon component={ClusterOutlined} />
        <span>
          <Link to={'/channel'}>Channel</Link>
        </span>
      </Menu.Item>   

      <Menu.Item key="2">
        <Icon component={UsergroupAddOutlined} />
        <span>
          <Link to={'/users'}>Users</Link>
        </span>
      </Menu.Item>     
    </Menu>
  );
};

export default MenuApp;






