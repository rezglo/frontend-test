import React from 'react';
import { 
  Avatar,  
  Col,
  Row,
  Button,
  Tooltip,
  Skeleton,
  Card,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const ChannelList = ({ 
  channels,
  setChannelSelected, 
  currentHeight,
  isLoadinChannels,
  deleteChannel
}) => {

  const onLoadChannelSelected = (item) => {
   setChannelSelected(item);
  };

  const onDeleteChannel = (id) => {
    deleteChannel(id);
  };

  return (
    <> 
        {/* CHANNELS LIST MOBILE*/}
        <Col className='container-user-list-mobile' xs={24} sm={24} md={0} lg={0} xl={0}>
            <Avatar.Group> 
              {channels?.map((channel, key) => (
                // eslint-disable-next-line react/jsx-key
                <Tooltip key={key} title={channel.name} placement="top">
                  <Button className='item-user' onClick={()=> onLoadChannelSelected(channel)}>                 
                      <Avatar size={{xs: 50, sm: 50 }} src={channel.avatar} />                   
                  </Button>
                </Tooltip> 
              ))}
            </Avatar.Group>
        </Col>

        {/* CHANNELS LIST DESKTOP */}
        <Col className='container-channels-list-not-mobile' xs={0} sm={0} md={8} lg={8} xl={8} style={{ 'height': `${currentHeight}px` }}>
          <Skeleton loading={isLoadinChannels} active avatar paragraph={{ rows: 4 }} >            
              <Row>
                {channels?.map((channel, key) => ( 
                    <Col xs={24} sm={24} md={24} lg={12} xl={8} style={{'marginBottom': '10px' }}>
                      <Card className='item-channels' style={{ width: 100 }}>
                        <Tooltip key={key} title="Delete channel" placement="top">
                          <Button className='item-user' onClick={()=> onDeleteChannel(channel.id)}> 
                            <CloseOutlined />
                          </Button>
                        </Tooltip>
                        <Tooltip key={key} title={`${channel.name}`} placement="top">                        
                          <Button className='item-user' onClick={()=> onLoadChannelSelected(channel)}>                 
                              <Avatar size={{xs: 50, sm: 50 }} src={channel.avatar} />
                          </Button>
                        </Tooltip>
                       
                        <p>{channel.name}</p>
                        <Button type="primary">Fallow</Button>
                      </Card>                
                    </Col>
                ))}
              </Row>
          </Skeleton>
        </Col>               
    </>    
  );
};
export default ChannelList;
