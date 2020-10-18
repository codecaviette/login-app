import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import login from './login.jpeg';

class App extends Component {
  render() {
  return (
    <Container fluid>
      <Row >
        <Col >
          <>
          <img 
            src={login}
            className="img-fluid"
            alt="generic placeholder"
          />
          </>
        </Col>
        <Col style={{paddingTop: '150px'}}>
          <Form className="login-form">
            <h1 style={loginStyle} > Login Page </h1>    
            <h2 className="text-center"> Welcome </h2>
            <FormGroup>
              <Label> Email </Label>
              <Input type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
              <Label> Password </Label>
              <Input type="password" placeholder="Password"/>       {/* password type defaults user's input to be shown as dots (hidden) */}
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block"> Log in </Button>
            <div className="text-center pt-3">
              Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3"/>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}}

//Hoisted styling for Login Page header
const loginStyle = {
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '10px'
}

export default App;
