/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import moment from "moment";
import io from "socket.io-client";
import { Row, Form, notification, Tooltip, Button, Modal, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { getChannels, getSmsChannel, createChannel, deleteChannel } from '../../api/channels';

import ChannelsList from './ChannelsList';
import ChannelChatList from './ChannelChatList';
import ChannelInfo from './ChannelInfo';
import { openNotificationSuccess } from '../../utils';
import { channelsListAction, } from '../../containers/Channels/reducers/channelsListReducer';
import { smsChannelsListAction } from '../../containers/Channels/reducers/smsChannelsListReducer';

const Channels = () => {

  let socketInstancia;
  const [form] = Form.useForm();
  const dispatch = useDispatch()

  const channelsList = useSelector((state) => state.channelsList.value);
  const smsList = useSelector((state) => state.smsChannelsList.value);

  const [currentSms, setCurrentSms] = useState("");
  const [listSms, setListSms] = useState([]);
  const [channelSelected, setChannelSelected] = useState();
  const [currentForChatListHeight, setCurrentForChatListHeight] = useState();
  const [currentForChannelsListHeight, setCurrentForChannelsListHeight] = useState();
  const [nameameNewChannel, setNameNewChannel] = useState();

  // Is Loading
  const [isLoadinChannels, setIsLoadingChannels] = useState(false);
  const [isLoadingSmsChannel, setIsLoadingSmsChannel] = useState(false);
  
  const [api] = notification.useNotification();

  // Socket IO
  const [socket, setSocket] = useState(undefined);
  const [roomName] = useState("rezglo");

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const getCalculatedHeightForChatList = () => {
  const doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName("body")[0],
    y = window.innerHeight || docElem.clientHeight || body.clientHeight;

    return y - 272.09 - 85;
  };

  const getCalculatedHeightForChannelsList = () => {
  const doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName("body")[0],
    y = window.innerHeight || docElem.clientHeight || body.clientHeight;  

    return y - 272.09 + 32 + 50 - 36;
  };

  const setCalculatedHeight = () => {
    const heightForChatListResult = getCalculatedHeightForChatList();
    setCurrentForChatListHeight(heightForChatListResult);

    const heightChannelsListResult = getCalculatedHeightForChannelsList();
    setCurrentForChannelsListHeight(heightChannelsListResult);
  };

  useEffect(() => {
    getChannels(
      setIsLoadingChannels, 
      openNotificationSuccess, 
      dispatch, 
      channelsListAction,
      api,
    );
    socketInitializer();
    getCalculatedHeightForChatList();
    getCalculatedHeightForChannelsList();
  }, []);

  useEffect(() => {
    getSmsChannel(
      setIsLoadingSmsChannel,
      dispatch,
      smsChannelsListAction,
      setListSms,
      smsList,
      openNotificationSuccess,
      api
    );
  }, [channelSelected]);

  useEffect(() => {
   setCalculatedHeight();
  }, [
    currentForChannelsListHeight,
    currentForChatListHeight,
    window.innerHeight,
    document.documentElement.clientHeight,
    document.getElementsByTagName("body")[0].clientHeight,
  ]);

  /* useEffect(() => {
    var objDiv = document.getElementsByClassName("container-channels-list-not-mobile");
      objDiv[0].scrollTop = objDiv[0].scrollHeight;
  }, [listSms]); */

  const socketInitializer = async () => {
     // eslint-disable-next-line react-hooks/exhaustive-deps
     socketInstancia = io("http://localhost:3002");
     // socketInstancia = io("/api/socket.io");

     //get message
     socketInstancia.on("message",(message) => {

       // Server Message
       setListSms(pre => [...pre, message]);
     });
      
     setSocket(socketInstancia);
  };

  const onChangeInputSms = (e) => {   
      setCurrentSms(e.target.value);     
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClick = ({ key }) => {    
    switch (key) {
      case '1':
        showDrawer();
        break;
    
      default:
        break;
    }
  };

  const onOptionHeader = ({ key }) => {
    switch (key) {
      case '1':
        showDrawer();
        break;      
    
      default:
        break;
    }
  };

  const sendMessage = () => {
    if (currentSms) {     
      const message = {
        name: channelsList[0]?.name,  
        message: currentSms, 
        transmitter: true,
        avatar: channelSelected.avatar,
        timestamp: moment()      
      }; 
      socket.emit("message", message, roomName);  
      setListSms([...listSms,message]);
    }
    setCurrentSms("");
    form.setFieldValue("sms",'');
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      if (currentSms) {
        sendMessage();
      }
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    createChannel({
      id: uuidv4(),
      name: nameameNewChannel,
      avatar: "channel9.png",
      numberFollowers: 5007854
    });

    message.success('The channel was successfully created.');    
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>    
      <span id='general-info-channel'>
        Find out the latest news on the topics that interest you.
       
        <Tooltip title="New channel" placement="top">
          <Button onClick={ ()=> showModal() }>                 
            <PlusOutlined />                 
          </Button>
        </Tooltip> 
      </span>

      <Row className='container-community-chat'> 

        {/* USER LIST */}
        <ChannelsList  
          channels={channelsList}
          setChannelSelected={setChannelSelected} 
          currentHeight={currentForChannelsListHeight}        
          isLoadinChannels={isLoadinChannels}        
          deleteChannel={deleteChannel}        
        />

        {/* CHAT LIST */}
        <ChannelChatList
            listSms={listSms} 
            form={form}
            onChangeInputSms={onChangeInputSms}
            handleKeypress={handleKeypress}
            sendSms={sendMessage}
            onClick={onClick}
            onOptionHeader={onOptionHeader}
            channelSelected={channelSelected}
            userDefault={!channelSelected && channelsList ? channelsList[0] : undefined }
            currentHeight={currentForChatListHeight} 
            showDrawer={showDrawer} 
            isLoadinUsers={isLoadinChannels} 
            isLoadingSmsChannel={isLoadingSmsChannel} 
         />
      </Row> 

      {/* USER INFO */}
      <ChannelInfo
        onClose={onClose}
        open={open}
        channelSelected={channelSelected}
      />

      {/* MODAL CREATE CHANNEL */}
      <Modal title="Create channel" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={form} 
          className='create-channel-form'
          name="create-channel-form"
          layout="inline"
        >
          <Form.Item name="nameChannel">
            <Input 
              name="nameChannel"
              placeholder="Name channel"
              type="text"    
              onChange={(e)=>setNameNewChannel(e.target.value)}                         
            />
          </Form.Item>
        </Form>
      </Modal> 
    </>    
  );
};
export default Channels;
