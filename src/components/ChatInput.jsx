import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { putChannelAsync } from "../features/appSlice";
import { useDispatch } from "react-redux";
import moment from "moment/moment";

function ChatInput(props) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    e.preventDefault(); // Prevents refresh

    if (!props.channelId || input === "") {
      return false;
    }
    const message = {
      id: Date.now(), //This is only for genarating an almost unique id.
      message: input,
      date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      user: "Angel Dario",
      userImage:
        "https://media.licdn.com/dms/image/D4E03AQGsnxHc_om6cg/profile-displayphoto-shrink_400_400/0/1677515969908?e=1698278400&v=beta&t=FeEQakVY4rFsFmYpYcW4-0RwpUPR2K-nvWl25uVb8OM",
    };

    const data = {
      id: props.channelId,
      message: message,
    }
    dispatch(putChannelAsync(data));
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${props.channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
