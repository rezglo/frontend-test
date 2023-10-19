import React from 'react';
import VirtualList from 'rc-virtual-list';
import { 
  Avatar, 
  List, 
  Col,
  Button,
  Tooltip, 
  Badge,
  Skeleton,
} from 'antd';

const UserList = ({ 
  users, 
  setUserSelected, 
  currentHeight,
  isLoadingUsers
}) => {

  const onLoadChatUserSelected = (item) => {
   setUserSelected(item);
  };

  return (
    <> 
        {/* USER LIST MOBILE*/}
        <Col className='container-user-list-mobile' xs={24} sm={24} md={0} lg={0} xl={0}>
            <Avatar.Group> 
              {users?.map((user, key) => (
                // eslint-disable-next-line react/jsx-key
                <Tooltip key={key} title={`${user.name.first} ${user.isConected ? 'is online':'is offline'}`} placement="top">
                  <Button className='item-user' onClick={()=> onLoadChatUserSelected(user)}>                 
                      <Avatar size={{xs: 50, sm: 50 }} src={user.avatar} />
                      {user.isConected 
                        ? <Badge color="#52c41a" status="processing" />
                        : <Badge status="error" />
                      }
                  </Button>
                </Tooltip> 
              ))}
            </Avatar.Group>
        </Col>

        {/* USER LIST DESKTOP */}
        <Col xs={0} sm={0} md={8} lg={8} xl={8} style={{ 'height': `${currentHeight}px` }}>
        <Skeleton loading={isLoadingUsers} active avatar paragraph={{ rows: 4 }} >
          <List className='container-user-list-not-mobile'>
            <VirtualList
              data={users}
              height={currentHeight}
              style={{ 'height': `${currentHeight}px` }}
              itemHeight={47}
              itemKey="email"
            >
              {(item) => (
                <button>
                  <List.Item key={item.email} onClick={()=> onLoadChatUserSelected(item)}>
                    <List.Item.Meta
                      avatar={
                        <>
                          <Tooltip title={`${item.name.first} ${item.isConected ? 'is online':'is offline'}`} placement="top">
                            <Avatar src={item.avatar} />
                            {item.isConected 
                            ? <Badge color="#52c41a" status="processing" />                        
                            : <Badge status="error" />
                            }
                          </Tooltip>                         
                        </>                  
                    }
                      title={item.name.user}
                      description="last seen 34 minutes ago"
                    />
                  </List.Item>
                </button>
              )}
            </VirtualList>
          </List>
        </Skeleton>
        </Col>               
    </>    
  );
};
export default UserList;
