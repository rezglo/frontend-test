import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const App: React.FC = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      
      style={{ width: 200 }}
    />
    <Search
      placeholder="input search text"
      allowClear
      
      style={{ width: 200 }}
    />
    <Search
      addonBefore="https://"
      placeholder="input search text"
      allowClear
      
      style={{ width: 304 }}
    />
    <Search placeholder="input search text"  enterButton />
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      
    />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      
    />
  </Space>
);

export default App;
