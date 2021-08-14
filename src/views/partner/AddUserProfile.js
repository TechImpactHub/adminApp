import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {CREATE_USER} from '../../services/mutations';
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

const AddUserProfile = () => {
    const history = useHistory();
    const [formState, setFormState] = useState({
      nationalId: '',
      firstName: '',
      lastName: '',
      role: '',
      phone: '',
    });
       
  
    const [signup] = useMutation(CREATE_USER, {
      variables: {
        nationalId: formState.nationalId,
        firstName: formState.firstName,
        lastName: formState.lastName,
        phone: formState.phone,
        role: formState.role,
      }, 
      client: client,
      onCompleted: (user) => {
        console.log(user);
        localStorage.setItem(AUTH_TOKEN, user);
        history.push('partners', user);
      }
    });
    console.log(formState)
    console.log(signup)
        return (
            <>
            <div className="content">
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader>
                      <h5 className="title">Create Profile</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>    
                        <Row>
                        <Col className="pr-md-1" md="4">
                            <FormGroup>
                              <label>National ID</label>
                              <Input
                                        value={formState.nationalId}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            nationalId: e.target.value
                                          })
                                        }
                                placeholder="National ID"
                                type="text"
                              />
                            </FormGroup>
                            </Col>
                            <Col className="pr-md-1" md="4">
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
                            </Col>
                            <Col className="pr-md-1" md="4">
                            <FormGroup>
        <label htmlFor="user_role">Choose Partnership Package</label>
        <Input className="pr-md-1"
                value={formState.role}
                onChange={(e) =>
                    setFormState({
                    ...formState,
                    role: e.target.value
                    })
                }
        type="select" name="userrole" id="user_role">
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="vendor">Vendor</option>
        </Input>
      </FormGroup>
                            </Col>
                            </Row> 
                        <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>First Name</label>
                              <Input
                                       value={formState.firstName}
                                       onChange={(e) =>
                                         setFormState({
                                           ...formState,
                                           firstName: e.target.value
                                         })
                                       }  
                               placeholder="First name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pl-md-1" md="6">
                            <FormGroup>
                              <label>Last Name</label>
                              <Input
                                        value={formState.lastName}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            lastName: e.target.value
                                          })
                                        }
                                placeholder="Last Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button 
                      onClick={signup}
                      className="btn-fill" color="primary" >
                        Save
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        )
    }

export default AddUserProfile;
