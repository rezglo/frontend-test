// ChannelList.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChannel, removeChannel } from "../actions/channel";
import { Button, List, ListItem, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { setActiveChannel, clearSetActiveUser} from "../actions/chat";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
}));

const ChannelList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { channels } = useSelector((state) => state.channel);

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
  const handleUserClick = (id) => {
    dispatch(clearSetActiveUser());
    dispatch(setActiveChannel(id));
  };

  return (
    <div>
      <Typography variant="h6">Channel List</Typography>
      <List>
        {channels.map((channel) => (
          <ListItem
            key={channel.id}
            className={classes.listItem}
            onClick={() => handleUserClick(channel.id)}
          >
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
