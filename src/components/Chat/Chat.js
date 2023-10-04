/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from "axios";
import io from "socket.io-client";
import { Row, Form, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import UserList from './UserList';
import ChatList from './ChatList';
import UserInfo from './UserInfo';
import { URL_BASE } from '../../constants';
import { openNotificationSuccess } from '../../utils';
import { usersListAction, } from '../../containers/Users/reducers/userListReducer';
import { smsListAction } from '../../containers/Users/reducers/smsListReducer';

const Chat = () => {

  let socketInstancia;
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const usersList = useSelector((state) => state.usersList.value)
  const smsList = useSelector((state) => state.smsList.value)

 /*  const [usersList, setUsers] = useState([]); */
  const [currentSms, setCurrentSms] = useState("");
  const [listSms, setListSms] = useState([]);
  const [userSelected, setUserSelected] = useState(undefined);
  const [currentForChatListHeight, setCurrentForChatListHeight] = useState();
  const [currentForUserListHeight, setCurrentForUserListHeight] = useState();

  // Is Loading
  const [isLoadingUsers, setIsLoadinUsers] = useState(false);
  const [isLoadingSms, setIsLoadingSms] = useState(false);
  
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

    return y - 272.09 - 36;
  };

  const getCalculatedHeightForUserList = () => {
  const doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName("body")[0],
    y = window.innerHeight || docElem.clientHeight || body.clientHeight;
    return y - 272.09 + 32 + 70 - 36;
  };

  const setCalculatedHeight = () => {
    const heightForChatListResult = getCalculatedHeightForChatList();
    setCurrentForChatListHeight(heightForChatListResult);

    const heightUserListResult = getCalculatedHeightForUserList();
    setCurrentForUserListHeight(heightUserListResult);
  };

  const getUsers = () => {
    setIsLoadinUsers(true);
    
    axios.get(`${URL_BASE}/users`).then((response) => {
        setTimeout(() => {  
          dispatch(usersListAction(response.data));
          setIsLoadinUsers(false);
          openNotificationSuccess(api, 'bottomRight', "Users loaded correctly.");
      }, 1500);
    }).catch(error => {
          console.log("error", error);
    });
  };

  const getSmsUsers = () => {
    setIsLoadingSms(true);
    
    axios.get(`${URL_BASE}/messages`).then((response) => {
        setTimeout(() => {   
          dispatch(smsListAction(response.data));    
          setListSms(smsList);
          setIsLoadingSms(false);
          openNotificationSuccess(api, 'bottomRight', "Sms loaded correctly.");
      }, 1500);
    }).catch(error => {
          console.log("error", error);
    });
  };

  useEffect(() => {
    getUsers();
    socketInitializer();
    getCalculatedHeightForChatList();
    getCalculatedHeightForUserList();
  }, []);

  useEffect(() => {
    getSmsUsers();
  }, [userSelected]);

  useEffect(() => {
   setCalculatedHeight();
  }, [
    currentForUserListHeight,
    currentForChatListHeight,
    window.innerHeight,
    document.documentElement.clientHeight,
    document.getElementsByTagName("body")[0].clientHeight,
  ]);

/*   useEffect(() => {
    var objDiv = document.getElementsByClassName("chat-list");
      objDiv[0].scrollTop = objDiv[0].scrollHeight;
  }, [smsList]); */

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
       case '2':
        console.log("Change nickname");
        break;
      case '3':
        console.log("Clean chat");
        break;
      case '4':
        console.log("Clean chat");
        break;
      
    
      default:
        break;
    }
  };

  const sendMessage = () => {
    if (currentSms) {     
      const message = {
        username: usersList[0]?.name?.user,  
        message: currentSms, 
        transmitter: true,
        timestamp: 1696446537000
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
      <Row className='container-community-chat'>  
        {/* USER LIST */}
        <UserList  
          users={usersList}
          setUserSelected={setUserSelected} 
          currentHeight={currentForUserListHeight}        
          isLoadingUsers={isLoadingUsers}        
        />

        {/* CHAT LIST */}
        <ChatList
            listSms={listSms} 
            form={form}
            onChangeInputSms={onChangeInputSms}
            handleKeypress={handleKeypress}
            sendSms={sendMessage}
            onClick={onClick}
            onOptionHeader={onOptionHeader}
            userSelected={userSelected}
            userDefault={!userSelected && usersList ? usersList[0] : undefined }
            currentHeight={currentForChatListHeight} 
            showDrawer={showDrawer} 
            isLoadingUsers={isLoadingUsers} 
            isLoadingSms={isLoadingSms} 
         />
      </Row> 

      {/* USER INFO */}
      <UserInfo
        onClose={onClose}
        open={open}
        userSelected={userSelected}
      />
    </>    
  );
};
export default Chat;
