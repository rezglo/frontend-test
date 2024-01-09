import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@mui/styles";
import { MessageLeft, MessageRight } from "../../components/messageComponent";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { massageDelete, massageUpdate } from "../../actions/chat";
import { messageAddNew } from "../../actions/chat";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      paddingBottom: "10%",
    },

    messagesBody: {
      alignItems: "center",
      width: "calc( 100% - 20px )",
      margin: 15,
      marginBottom: 50,
      overflowY: "scroll",
      height: "calc( 100% - 80px )",
    },
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      width: "95%",

      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: "100%",
    },
  })
);

export const ChatView = () => {
  const classes = useStyles();

  //Logic Hooks
  const dispatch = useDispatch();
  const { listMassages, activeUserChat, activeChannel } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);
  const [clickedMassage, setActiveMessage] = useState(0);
  const [TextMassage, setTextMessage] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    // Filtra los mensajes para mostrar solo los privados del usuario activo contigo
    const filtered = listMassages.filter((message) => {
      return (
        message.user.username === user.username || // Mensajes del usuario activo
        message.user.username === activeUserChat
      );
    });
    setFilteredMessages(filtered);
  }, [listMassages, activeUserChat]);

  useEffect(() => {   
    setFilteredMessages(listMassages);
  }, [activeChannel]);

  const onAdd = () => {
    const msj = {
      id: uuid(),
      timestamp: format(new Date(), "MM-dd-yy HH:mm:ss"),
      message: TextMassage,
      user: {
        avatar: user.avatar,
        username: user.username,
      },
    };
    dispatch(messageAddNew(msj));
    setTextMessage("");
  };
  const onRemove = () => {
    console.log("Removing message with id:", clickedMassage);
    dispatch(massageDelete(clickedMassage));
    setActiveMessage(0);
    setTextMessage("");
  };
  const onUpdate = () => {
    const element = listMassages.find((e) => e.id === clickedMassage);
    dispatch(massageUpdate({ ...element, message: TextMassage }));
    setActiveMessage(0);
    setTextMessage("");
  };
  const onCancel = () => {
    setActiveMessage(0);
    setTextMessage("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.messagesBody}>
        {filteredMessages
          .slice()
          .reverse()
          .slice(0, 10)
          .map(({ id, timestamp, message, user: { avatar, username } }) => {
            const isCurrentUser = username === user.username;
            return isCurrentUser ? (
              <MessageRight
                id={id}
                key={id}
                message={message}
                timestamp={timestamp}
                photoURL={avatar}
                displayName={username}
                avatarDisp={true}
                setActiveMessage={setActiveMessage}
                setTextMessage={setTextMessage}
              />
            ) : (
              <MessageLeft
                id={id}
                key={id}
                message={message}
                timestamp={timestamp}
                photoURL={avatar}
                displayName={username}
                avatarDisp={false}
                setActiveMessage={setActiveMessage}
                setTextMessage={setTextMessage}
              />
            );
          })}
      </div>

      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label=""
          className={classes.wrapText}
          onChange={(e) => setTextMessage(e.currentTarget.value)}
          value={TextMassage}
        />

        {clickedMassage === 0 && (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onAdd}
          >
            <SendIcon />
          </Button>
        )}
        {clickedMassage !== 0 && (
          <>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={onCancel}
            >
              <CancelIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onUpdate}
            >
              <EditIcon />
            </Button>
            <Button
              variant="contained"
              color="error"
              className={classes.button}
              onClick={onRemove}
            >
              <DeleteIcon />
            </Button>
          </>
        )}
      </form>
    </div>
  );
};
