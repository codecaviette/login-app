import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

class App extends Component {
  render() {
  return (
    <Form className="login-form">
      <h1 style={loginStyle} > Login Page </h1>    
      <h2 className="text-center"> Welcome </h2>
      <FormGroup>
        <Label> Email </Label>
        <Input type="email" placeholder="Email"/>
      </FormGroup>
    </Form>
  );
}}

//Hoisted styling for Login Page header
const loginStyle = {
  fontStyle: 'bold',
  textAlign: 'center',
  padding: '10px'
}

export default App;
