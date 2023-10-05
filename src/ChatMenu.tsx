import "./Menu.scss";

import SideMenuHead from "./SideMenuHead";
import Sider from "antd/es/layout/Sider";
import Text from "antd/es/typography";
import Paragraph from "antd/es/typography/Paragraph";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
const ChatMenu: React.FC = () => {
  return (
    <Sider
      style={{
        backgroundColor: "#371638",
      }}
      width={500}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <SideMenuHead text="Mensajes Directos" />
        <Input
          prefix={<SearchOutlined style={{ color: "white" }} />}
          className="message"
          placeholder="Busca un mensaje directo"
        />
        <div
          style={{
            margin: "0px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Paragraph>
            <Text
              style={{ color: "white", fontWeight: "bold", display: "inline" }}
            >
              Slack es mejor cuando se incluye a todo el mundo
            </Text>
            <Text style={{ color: "white", display: "inline" }}>
              {` ¡Añade a tu equipo y que empiece la conversación!`}
            </Text>
          </Paragraph>
          <Button type="primary" style={{ backgroundColor: "black" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Añadir compañeros de trabajo
            </Text>
          </Button>
        </div>
      </div>
    </Sider>
  );
};
export default ChatMenu;
