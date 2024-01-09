// ChannelList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChannel, removeChannel } from '../actions/channel';
import { Button, List, ListItem, Typography,IconButton  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ChannelList = () => {
  const dispatch = useDispatch();
  const {channels} = useSelector((state) => state.channel);

  const handleAddChannel = () => {
    const newChannel = {
      id: Math.random().toString(36).substr(2, 9), 
      name: `Channel ${channels.length + 1}`,
    };
    dispatch(addChannel(newChannel));
  };

  const handleRemoveChannel = (channelId) => {
    dispatch(removeChannel(channelId));
  };

  return (
    <div>
      <Typography variant="h6">Channel List</Typography>
      <List>
        {channels.map((channel) => (
          <ListItem key={channel.id}>
            <Typography>{channel.name}</Typography>
            <IconButton
              aria-label="delete"
              color="error"  
              onClick={() => handleRemoveChannel(channel.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <ListItem>
      <Button variant="contained" color="primary" onClick={handleAddChannel}>
        Add Channel
      </Button>
      </ListItem>    
    </div>
  );
};

export default ChannelList;