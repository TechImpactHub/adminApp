import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {EDIT_PARTNER} from '../../services/mutations';
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
    console.log('props.location.query')
    // console.log(props.location)
    const partner = props.location.query.vendor.node.partner
    const phone = props.location.query.contact.node.phone
    
     console.log('phone')
     console.log(phone)
    //  console.log(partner.nationalId)
     console.log('partner')
     console.log(partner)


    const [formState, setFormState] = useState({
      partnerUuid: partner.partnerUuid,
      nationalId: partner.nationalId,
      phone: phone,
      firstName: partner.user.firstName,
      lastName: partner.user.lastName,
    
    });
    

    const [editpartner] = useMutation(EDIT_PARTNER, {
      variables: {
        partnerUuid: partner.partnerUuid,
        nationalId: formState.nationalId,
        phone: formState.phone,
        firstName: formState.firstName,
        lastName: formState.lastName,
      }, 
      client: client,
      onCompleted: (user) => {
        console.log(user);
        history.push('/admin/vendors');
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

                          <Col className="px-md-1" md="6">
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
                          <Col className="pl-md-1" md="6">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                Phone
                              </label>
                              <Input
                                       value={formState.phone}
                                       onChange={(e) =>
                                         setFormState({
                                           ...formState,
                                           phone: e.target.value
                                         })
                                       } 
                              placeholder="777777777" type="phone" />
                            </FormGroup>
                          </Col>
                          <Col className="px-md-1" md="4">
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
                          <h5 className="title">{formState.firstName} {formState.lastName}</h5>
                        </a>
                        <p className="description">{formState.role}</p>
                      </div>
                      <div className="card-description">
                            {formState.partnerUuid}
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
