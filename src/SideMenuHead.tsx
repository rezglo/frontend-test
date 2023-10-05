import { DownOutlined, FormOutlined, MenuOutlined } from "@ant-design/icons";

const SideMenuHead: React.FC<{text:string}> = ({text}) => {
    return (
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
            {text}
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
    );
};
export default SideMenuHead