import { Menu, MenuProps } from "antd";
import SideMenuHead from "./SideMenuHead";
import { CaretRightOutlined, NumberOutlined } from "@ant-design/icons";
import React from "react";
import Sider from "antd/es/layout/Sider";

const items2: MenuProps["items"] = [
  "Canales",
  "Mensajes Directos",
  "Actividad",
].map((name, index) => {
  const key = String(index + 1);

  return {
    key: `${key}`,
    icon: React.createElement(CaretRightOutlined),
    label: `${name}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: `option${subKey}`,
        icon: React.createElement(NumberOutlined),
        label: `option${subKey}`,
        /* children:<Link to={`option${subKey}`}/> */
      };
    }),
  };
});

const GeneralMenu: React.FC = () => {
  return (
    <Sider style={{ backgroundColor: "#371638" }} width={300}>
      <SideMenuHead text="EjemploProyecto" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ backgroundColor: "#371638", height: "100%" }}
        items={items2}
        onSelect={({key}) => {
           history.pushState(null,"",`${key}`)  
        }}
      />
    </Sider>
  );
};

export default GeneralMenu;
