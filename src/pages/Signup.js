/*
* FILE          :   Signup.js
* PROJECT       :   SENG3080 - Group Project
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-04-18
* DESCRIPTION   :   The registration screen for the application
*/
import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// SignUp component 
// Handles the logging in of users
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  // handles form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      username,
      password
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/users/register`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("my_user_token", response.data.token);
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
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: "5px",
          }}
        >
          PicMe Registration
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
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to="/">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default SignUp;
