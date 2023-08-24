import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../features/appSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const signIn = (e) => {
    e.preventDefault();

    if (username === "dariolggomez" && password === "1234") {
      const user = {
        username: username,
        password: password,
      };
      dispatch(loginUser(user));
    } else {
      alert("Wrong username or password");
    }

    setUsername("");
    setPassword("");
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://play-lh.googleusercontent.com/mzJpTCsTW_FuR6YqOPaLHrSEVCSJuXzCljdxnCKhVZMcu6EESZBQTCHxMh8slVtnKqo"
          alt="slack"
        />
        <h1>Slack Clone</h1>
        <p>by dariolggomez</p>
        <form>
          <label>Username</label>
          <br />
          <input
            type="text"
            spellCheck={false}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Button type="submit" onClick={signIn}>
          Sign in
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 60px;
  width: 20%;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
  }

  > p {
    margin-bottom: 20px;
  }

  > form > input {
    width: 80%;
    height: 1.5rem;
    border: 2px solid gray;
    border-radius: 3px;
    margin-bottom: 20px;
    margin-top: 5px;
    outline: none;
    font-size: 14px;
    text-align: center;
  }

  > form > label {
    font-size: 17px;
  }

  > button {
    margin-top: 10px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
