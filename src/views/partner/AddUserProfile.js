import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {SIGNUP_MUTATION} from '../../services/mutations';
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
      email: '',
      nationalId: '',
      pushToken: '',
      username: '',
      firstName: '',
      lastName: '',
      neighborhood: '',
      role: '',
      city: '',
      street: '',
      phone: '',
    });
       
  
    const [signup] = useMutation(SIGNUP_MUTATION, {
      variables: {
        username: formState.username,
        email: formState.email,
        nationalId: formState.nationalId,
        pushToken: formState.pushToken,
        firstName: formState.firstName,
        lastName: formState.lastName,
        neighborhood: formState.neighborhood,
        city: formState.city,
        street: formState.street,
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

                          <Col className="px-md-1" md="4">
                            <FormGroup>
                              <label>Username</label>
                              <Input
                                        value={formState.username}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            username: e.target.value
                                          })
                                        }
                                placeholder="Username"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pl-md-1" md="4">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <Input
                                       value={formState.email}
                                       onChange={(e) =>
                                         setFormState({
                                           ...formState,
                                           email: e.target.value
                                         })
                                       } 
                              placeholder="mike@email.com" type="email" />
                            </FormGroup>
                          </Col>
                          <Col className="px-md-1" md="4">
                        <FormGroup>
                            <label>PIN</label>
                            <Input
                                    value={formState.pushToken}
                                    onChange={(e) =>
                                        setFormState({
                                        ...formState,
                                        pushToken: e.target.value
                                        })
                                    }
                            placeholder="Password"
                            type="password"
                            />
                        </FormGroup>
                        </Col>
                        </Row>      
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
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Street Address</label>
                              <Input
                                        value={formState.street}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            street: e.target.value
                                          })
                                        }
                                placeholder="Home Address"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Neighborhood</label>
                              <Input
                                        value={formState.neighborhood}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            neighborhood: e.target.value
                                          })
                                        }
                                placeholder="Neighborhood"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="px-md-1" md="6">
                            <FormGroup>
                              <label>City</label>
                              <Input
                                        value={formState.city}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            city: e.target.value
                                          })
                                        }
                                placeholder="City"
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
