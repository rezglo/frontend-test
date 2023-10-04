import "./Bar.scss";
import React from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BellOutlined,
  CaretRightOutlined,
  /* ClockCircleFilled, */
  ClockCircleOutlined,
  DownOutlined,
  FormOutlined,
  HomeFilled,
  MenuOutlined,
  MessageOutlined,
  NumberOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  SmallDashOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { /* Breadcrumb, */ Button, Layout, Menu, Space, theme } from "antd";
import Search from "antd/es/input/Search";

const { Header, Content, Sider } = Layout;

/* const items1: MenuProps["items"] = new Array(15).fill(null).map((_, index) => {
  const key = index + 1;
  return {
    key,
    label: `nav ${key}`,
  };
});
 */
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
        key: subKey,
        icon: React.createElement(NumberOutlined),
        label: `option${subKey}`,
      };
    }),
  };
});

const Bar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr 1fr",
          backgroundColor: "#642a66",
          gap: 20,
        }}
      >
        <div className="header">
          <ArrowLeftOutlined style={{ color: "white" }} />
          <ArrowRightOutlined style={{ color: "white" }} />
          <ClockCircleOutlined style={{ color: "white" }} />
        </div>
        <div className="content">
          <Search
            placeholder="This is a placeholder"
            style={{ backgroundColor: "#8e3c91", maxWidth: 600 }}
          />
        </div>
        <QuestionCircleOutlined style={{ color: "white" }} />
      </Header>
      <Content
        style={
          {
            /* padding: "0 50px" */
          }
        }
      >
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout
          style={{
            /* padding: "24px 0", */ background: colorBgContainer,
            height: "100%",
          }}
        >
          <Sider
            style={{ backgroundColor: "#642a66", height: "100%" }}
            width={75}
          >
            <div
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                height: "100%",
              }}
            >
              <Space direction="vertical">
                <div className="element">
                  <Button
                    type="primary"
                    style={{ width: `50%`, margin: `auto` }}
                  ></Button>
                </div>
                <div className="element">
                  <HomeFilled style={{ color: "white", fontSize: "24px" }} />
                  <span style={{ color: "white" }}>Inicio</span>
                </div>
                <div className="element">
                  <MessageOutlined
                    style={{ color: "white", fontSize: "24px" }}
                  />
                  <span style={{ color: "white", textAlign: "center" }}>
                    Mensajes directos
                  </span>
                </div>
                <div className="element">
                  <BellOutlined style={{ color: "white", fontSize: "24px" }} />
                  <span style={{ color: "white" }}>Actividad </span>
                </div>
                <div className="element">
                  <SmallDashOutlined
                    style={{ color: "white", fontSize: "24px" }}
                  />
                  <span style={{ color: "white" }}>Actividad </span>
                </div>
              </Space>
              <Space>
                <div className="element" style={{ gap: "20px" }}>
                  <PlusOutlined style={{ color: "white", fontSize: "24px" }} />
                  <UserOutlined style={{ color: "white", fontSize: "24px" }} />
                </div>
              </Space>
            </div>
          </Sider>
          <Sider style={{ backgroundColor: "#371638" }} width={300}>
            <div
              style={{
                marginTop: 10,
                marginLeft: 20,
                marginBottom: 15,
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
              }}
            >
              <div style={{ color: "white" }}>
                <span style={{ fontSize: 20, fontWeight: "bolder" }}>
                  EquipoEjemplo
                </span>
                <DownOutlined />
              </div>
              <div
                style={{
                  color: "#999",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  fontSize: 15,
                  gap: 15,
                }}
              >
                <MenuOutlined />
                <FormOutlined />
              </div>
            </div>

            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ backgroundColor: "#371638", height: "100%" }}
              items={items2}
            />
          </Sider>

          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Bar;
