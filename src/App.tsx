import "./Bar.scss";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BellOutlined,

  /* ClockCircleFilled, */
  ClockCircleOutlined,
  HomeFilled,
  MessageOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  SmallDashOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { /* Breadcrumb, */ Button, Layout, Space } from "antd";
import Search from "antd/es/input/Search";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import GeneralMenu from "./generalMenu";
import ChatMenu from "./ChatMenu";
import ContentApp from "./ContentApp";
/* import Bar from './Bar' */

function App() {
  const { Header, Content, Sider } = Layout;
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
      <Content>
        <Layout
          style={{
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
                gridTemplateRows: "8fr 1fr",

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
                  <Link to={"general"} className="sideButton">
                    <HomeFilled style={{ color: "white", fontSize: "24px" }} />
                  </Link>
                  <span style={{ color: "white" }}>Inicio</span>
                </div>
                <div className="element">
                  <Link to={"messages"} className="sideButton">
                    <MessageOutlined
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </Link>
                  <span style={{ color: "white", textAlign: "center" }}>
                    Mensajes directos
                  </span>
                </div>
                <div className="element">
                  <Button className="sideButton">
                    <BellOutlined
                      style={{ color: "white", fontSize: "24px" }}
                    />
                  </Button>
                  <span style={{ color: "white" }}>Actividad </span>
                </div>
                <div className="element">
                  <SmallDashOutlined
                    style={{ color: "white", fontSize: "24px" }}
                  />
                  <span style={{ color: "white" }}>Actividad </span>
                </div>
              </Space>
              <Space direction="vertical">
                <div
                  className="element"
                  style={{ gap: "20px", justifyContent: "flex-end" }}
                >
                  <PlusOutlined style={{ color: "white", fontSize: "24px" }} />
                  <UserOutlined style={{ color: "white", fontSize: "24px" }} />
                </div>
              </Space>
            </div>
          </Sider>

          <Routes>
            <Route path="/general" element={<GeneralMenu />}/>
            <Route path="/messages" element={<ChatMenu />} />
          </Routes>

          <ContentApp />
        </Layout>
      </Content>
      <style>
        {`
  `}
      </style>
    </Layout>
  );
}

export default App;
