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

const EditUserProfile = (props) => {
    const history = useHistory();
    if (props.location.query == null) {
        history.push('/');
    }
    
    const partner = props.location.query.partner.node
    const contact = props.location.query.contactData.node
    console.log(partner.user.username)
    console.log(contact)
    console.log(partner.partnerUuid)

    // console.log(partner.user.partner.contactSet.edges);

    

    const [formState, setFormState] = useState({
      nationalId: partner.nationalId,
      email: partner.user.email,
      password: partner.user.password,
      username: partner.user.username,
      firstName: partner.user.firstName,
      lastName: partner.user.lastName,
      role: partner.partnerRole.role,
      neighborhood: contact.neighborhood,
      city: contact.city,
      street: contact.street,
      phone: contact.phone,
    
    });
    const [editpartner] = useMutation(SIGNUP_MUTATION, {
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
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
        history.push('/admin/partners');
      }
    });
    
    console.log(formState)
        return (
            <>
            <div className="content">
              <Row>
                <Col md="8">
                  <Card>
                    <CardHeader>
                      <h5 className="title">Edit Profile</h5>
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
                            <label>Password</label>
                            <Input
                                    value={formState.password}
                                    onChange={(e) =>
                                        setFormState({
                                        ...formState,
                                        password: e.target.value
                                        })
                                    }
                            placeholder="Password"
                            type="password"
                            />
                        </FormGroup>
                        </Col>
                        </Row> 
                        <Row>
                        {        
    partner.contactSet.edges.map(contactData => 
                            <Col className="pr-md-1" md="4">
                            <FormGroup>
                              <label>Phone</label>
                              <Input
                                        value={formState.phone}
                                        placeholder={contactData.phone}
                                        onChange={(e) =>
                                          setFormState({
                                
                                            ...formState,
                                            phone: e.target.value
                                          })
                                        }
                                type="text"
                              />
                            </FormGroup>
                            </Col>
                            )
                            }               
                            <Col className="pr-md-1" md="8">
                            <FormGroup>
        <label htmlFor="user_role">Select</label>
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

{        
    partner.contactSet.edges.map(contactData => 

                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Street Address</label>
                              <Input
                                        value={formState.street}
                                        placeholder={contactData.street}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            street: e.target.value
                                          })
                                        }
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
    )
}
{        
    partner.contactSet.edges.map(contactData => 

                        <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Neighborhood</label>
                              <Input
                                        value={formState.neighborhood}
                                        placeholder={contactData.neighborhood}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            neighborhood: e.target.value
                                          })
                                        }
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="px-md-1" md="6">
                            <FormGroup>
                              <label>City</label>
                              <Input
                                        value={formState.city}
                                        placeholder={contactData.city}

                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            city: e.target.value
                                          })
                                        }
                                type="text"
                              />
                            </FormGroup>
                          </Col>
          
                        </Row>
                        )
}
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button 
                      onClick={editpartner}
                      className="btn-fill" color="primary" >
                        Save
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
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
                      <div className="card-description">
                        Do not be scared of the truth because we need to restart the
                        human foundation in truth And I love you like Kanye loves
                        Kanye I love Rick Owens’ bed design but the back is...
                      </div>
                    </CardBody>
                    <CardFooter>
                      <div className="button-container">
                        <Button className="btn-icon btn-round" color="facebook">
                          <i className="fab fa-facebook" />
                        </Button>
                        <Button className="btn-icon btn-round" color="twitter">
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button className="btn-icon btn-round" color="google">
                          <i className="fab fa-google-plus" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        )
    }

export default EditUserProfile;
