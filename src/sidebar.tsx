import React from "react";
import { Layout, /* Button, Space, DatePicker */ } from "antd";
import "./SideBar.scss"; // Custom CSS file for styling

const SideBar: React.FC<{ menu: React.ReactNode }> = ({ menu }) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint="lg"
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </Layout.Sider>
  );
};

export default SideBar
