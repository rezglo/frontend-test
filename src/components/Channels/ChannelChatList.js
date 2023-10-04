/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import moment from 'moment';
import { MoreOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { 
  Avatar, 
  List,
  Col, 
  Row, 
  Button, 
  Form, 
  Input,
  Dropdown,
  Space, 
  Skeleton,
  Tooltip,
} from 'antd';

const ChannelChatList = ({
  listSms, 
  form, 
  onChangeInputSms, 
  handleKeypress, 
  sendSms,
  onOptionHeader,
  onClick,
  channelSelected,
  userDefault,
  currentHeight,
  showDrawer,
  isLoadinUsers,
  isLoadingSmsChannel
}) => {

  const items = [
    {
      label: 'Details',
      key: '1',
    },   
  ];

  return (   
      <Col xs={24} sm={24} md={16} lg={16} xl={16}>      
        <Skeleton loading={isLoadinUsers} active avatar paragraph={{ rows: 4 }} >
          <Row className='container-chat-list'>
              {/* HEADER CHAT LIST */}
              <Col xs={24} className='container-user-list-not-mobile container-header-chat-list'>
                <Button>
                  <Avatar src={channelSelected ? channelSelected?.avatar : userDefault?.avatar}  onClick={showDrawer}/>
                </Button>
                <List.Item.Meta              
                  title={channelSelected ? channelSelected?.name : userDefault?.name} 
                  description={`public channel ${channelSelected ? `${channelSelected?.numberFollowers} followers` : ''}`}
                />   
                <Dropdown menu={{ items, onClick: onOptionHeader }} trigger={['click']} >
                  <a href='#' onClick={(e) => e.preventDefault()}>
                    <Space>
                      <MoreOutlined />
                    </Space>
                  </a>
                </Dropdown>              
              </Col>

              <Col className='chat-list' span={24} style={{ 'height':`${currentHeight}px` }}> 
                <Skeleton loading={isLoadingSmsChannel} active avatar paragraph={{ rows: 4 }} >                
                  <List
                    itemLayout="horizontal"
                    dataSource={listSms}
                    renderItem={(item, index) => (  
                      <List.Item>                  
                        <List.Item.Meta 
                          className={item.transmitter ? 'is-transmitter':'is-not-transmitter'}
                          avatar={                        
                              <Tooltip placement="topRight" title={item.name}> 
                                <Avatar src={item.transmitter && channelSelected ? channelSelected.avatar : item.avatar} />                            
                              </Tooltip>                         
                          }
                          description={
                            <> 
                              <span>
                                {item.message}                          
                              </span> 
                              <br/>
                              <span className='broadcast-date'>
                              {moment(item.timestamp).format('YYYY-MM-DD HH:MM:SS')}
                                <div className='sms-actions'>                          
                                  <a  onClick={(e) => e.preventDefault()}>
                                      <Space>
                                        <Tooltip placement="topRight" title="Edit Message">                                     
                                          <FormOutlined />
                                        </Tooltip>
                                      </Space>
                                  </a>                       
                                  <a onClick={(e) => e.preventDefault()}>
                                      <Space>
                                        <Tooltip placement="topRight" title="Delete Message"> 
                                          <DeleteOutlined />
                                        </Tooltip>
                                      </Space>
                                  </a>                   
                                </div>
                              </span> 
                            </>
                          }                 
                        />                 
                      </List.Item>              
                    )}
                  /> 
                </Skeleton>                
              </Col>

              <Col className='container-chat-form' span={24}>
                <Form
                  form={form} 
                  className='chat-form'
                  name="send-sms"
                  layout="inline"
                  onFinish={sendSms}
                  initialValues={{
                    price: {
                      number: 0,
                      currency: 'rmb',
                    },
                  }}
                >
                  <Form.Item name="sms">
                    <Input 
                      name="sms"
                      id="text-sms" 
                      onChange={onChangeInputSms} 
                      placeholder="Send sms" 
                      onKeyUp={(e)=> handleKeypress(e)}
                      type="text"                             
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      SEND
                    </Button>
                  </Form.Item>
                </Form>
              </Col>          
          </Row>
        </Skeleton>       
      </Col>          
  );
};
export default ChannelChatList;
