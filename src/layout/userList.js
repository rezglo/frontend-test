// UserList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, List, ListItem, Typography } from "@mui/material";
import { ListStartUsers } from "../actions/chat";
import { makeStyles } from "@mui/styles";
import { setActiveUser } from "../actions/chat";

const useStyles = makeStyles((theme) => ({
  userListContainer: {
    padding: theme.spacing(2),
    backgroundColor: '#f4f4f4',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    cursor: 'pointer'
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  activeListItem: {
    backgroundColor: '#c3e6cb', 
    fontWeight: 'bold', 
  },
}));

const UserList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {users} = useSelector((state) => state.chat);
  const {activeUserChat} = useSelector((state) => state.chat);
  useEffect(() => {   
    const listData = async () => {      
      dispatch(ListStartUsers());     
    };
    listData();
  }, []);
  const handleUserClick = (userId) => {   
    dispatch(setActiveUser(userId));
    
  };

  return (
    <div>
      <Typography variant="h6">User List</Typography>
      <List>
        {users.map((user) => (
          <ListItem 
          key={user.id} 
          className={`${classes.listItem} ${user.id === activeUserChat ? classes.activeListItem : ''}`}
           onClick={() => handleUserClick(user.username)}
           >
            <Avatar alt={user.username} src={user.avatar} className={classes.avatar}/>
            <Typography>{user.username}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserList;
