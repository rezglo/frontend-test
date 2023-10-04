/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from "axios";
import io from "socket.io-client";
import { Row, Form, notification, Tooltip, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import ChannelsList from './ChannelsList';
import ChannelChatList from './ChannelChatList';
import ChannelInfo from './ChannelInfo';
import { URL_BASE } from '../../constants';
import { openNotificationSuccess } from '../../utils';

const Channels = () => {

  let socketInstancia;
  const [form] = Form.useForm();

  const [channelsList, setChnnels] = useState([]);
  const [currentSms, setCurrentSms] = useState("");
  const [listSms, setListSms] = useState([]);
  const [channelSelected, setChannelSelected] = useState();
  const [currentForChatListHeight, setCurrentForChatListHeight] = useState();
  const [currentForChannelsListHeight, setCurrentForChannelsListHeight] = useState();

  // Is Loading
  const [isLoadinChannels, setIsLoadingChannels] = useState(false);
  const [isLoadingSmsChannel, setIsLoadingSmsChannel] = useState(false);
  
  const [api] = notification.useNotification();

  // Socket IO
  const [socket, setSocket] = useState(undefined);
  const [roomName] = useState("rezglo");

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

  const getChannels = () => {
    setIsLoadingChannels(true);

    openNotificationSuccess(api, 'bottomRight', "Users loaded correctly.");
    axios.get(`${URL_BASE}/channels`).then((response) => {
        setTimeout(() => {      
          setChnnels(response.data);
          setIsLoadingChannels(false);
      }, 1500);
    }).catch(error => {
          console.log("error", error);
    });
  };

  const getSmsChannel = () => {
    setIsLoadingSmsChannel(true);
    
    axios.get(`${URL_BASE}/channelMessages`).then((response) => {
        setTimeout(() => {      
          setListSms(response.data);
          setIsLoadingSmsChannel(false);
          openNotificationSuccess(api, 'bottomRight', "Sms channel loaded correctly.");
      }, 1500);
    }).catch(error => {
          console.log("error", error);
    });
  };

  useEffect(() => {
    getChannels();
    socketInitializer();
    getCalculatedHeightForChatList();
    getCalculatedHeightForChannelsList();
  }, []);

  useEffect(() => {
    getSmsChannel();
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
        timestamp: 1696446537000,
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

  return (
    <>    
      <span id='general-info-channel'>
        Find out the latest news on the topics that interest you.
       
        <Tooltip title="New channel" placement="top">
          <Button onClick={()=> console.log("New channel")}>                 
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
    </>    
  );
};
export default Channels;
