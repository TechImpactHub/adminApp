import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation, useQuery} from '@apollo/client';
import {client} from '../../gql-config';
import {LOGIN} from '../../services/query';
import { AUTH_TOKEN } from '../../constants';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
    const history = useHistory();
    const [formState, setFormState] = useState({
      pushToken: '',
      phone: '',
    });
       
  const login = () => {
      client.query({
          query: LOGIN,
          variables: {
            pushToken: formState.pushToken,
            phone: formState.phone,
          }
      }).then(result => {
          console.log(result)
          history.push('dashboard');
      })
  }

    console.log(formState)
    console.log(login)
        return (
            <>
            <div className="content">
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader>
                      
                    </CardHeader>
                    <CardBody>
                        <Row>
                        <Col className="pr-md-1" md="4">
                          
                            </Col>
                            <Col className="pr-md-1" md="4">
                            <Card className="card-user">
                    <CardBody>
                      <CardText />
                      <div className="author">
                        <div className="block block-one" />
                        <div className="block block-two" />
                        <div className="block block-three" />
                        <div className="block block-four" />
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar"
                            src={require("assets/img/emilyz.jpg").default}
                          />
                          <h5 className="title">Mike Andrew</h5>
                        </a>
                        <p className="description">Ceo/Co-Founder</p>
                      </div>
                      <Form>    
                        <Row>
                            <Col className="pr-md-1" md="12">
                            <FormGroup>
                              <label>Phone</label>
                              <Input
                                        value={formState.phone}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            phone: e.target.value
                                          })
                                        }
                                placeholder="Phone"
                                type="text"
                              />
                            </FormGroup>
                            </Col></Row>
                            <Row>
                            <Col className="pr-md-1" md="12">
                            <FormGroup>
                              <label>Pin</label>
                              <Input
                                        value={formState.pushToken}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            pushToken: e.target.value
                                          })
                                        }
                                placeholder="Phone"
                                type="text"
                              />
                            </FormGroup>
                            </Col>
                            </Row> 
                      </Form>
                    </CardBody>
                    <CardFooter>
                    <Button 
                      onClick={login}
                      className="btn-fill" color="primary" >
                        Login
                      </Button>
                    </CardFooter>
                  </Card>
                            </Col>
                            <Col className="pr-md-1" md="4">
              
                            </Col>
                        </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        )
    }

export default Login;
