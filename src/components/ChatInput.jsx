import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

function ChatInput(props) {
  const sendMessage = (e) => {
    e.preventDefault(); // Prevents refresh
  };

  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #CHANNEL`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div``;
