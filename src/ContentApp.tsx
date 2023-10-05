import { Space } from "antd"

import Text from 'antd/es/typography'
import { Content } from "antd/es/layout/layout"

const ContentApp: React.FC = () => {
   
    
    return (
      <Space direction="vertical">
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
                <Text>#Varios</Text>
        </Content>
      </Space>
    );
}
export default ContentApp