/*
* FILE          :   Login.js
* PROJECT       :   SENG3080 - Group Project
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-04-18
* DESCRIPTION   :   The login screen for the application
*/
import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// Login component 
// Handles the logging in of users
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  // handles form submission
  const onSubmit = async (e) => {
    e.preventDefault(); // called to prevent page from re-rendering on form submission    

    var data = JSON.stringify({
      username,
      password
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/users/login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(config) // uses axios to send the request to the server
      .then(function (response) {
        localStorage.setItem("my_user_token", response.data.token); // takes the response data's token and stores it in localstorage
        console.log(response);
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // returned JSX
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h1"
          color="red"
          textAlign="center"
          style={{
            fontSize: "6em",
            fontWeight: "normal",
            marginBottom: "5px",
          }}
        >
          PicMe
        </Header>
        <Form size="large" onSubmit={onSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              onChange={(e)=> setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e)=> setPassword(e.target.value)}
            />
            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default Login;
