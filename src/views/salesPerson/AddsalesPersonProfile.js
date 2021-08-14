import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation, useQuery } from '@apollo/client';
import {client} from '../../gql-config';
import {GET_PARTNER_BY_PHONE_MUTATION} from '../../services/mutations';
import { Link } from "react-router-dom";

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
const AddsalesPersonProfile = () => {
    const history = useHistory();
    // set form state
  const [phoneNumber, setPhoneNumber] = useState('');
    
    const [formState, setFormState] = useState({
    partnerResults : false,
     personExists : false,
     person: [],
     partner: [],
      loggedInUser : 'admin@gutaapp.com',
      nationalId: '',
      email: '',
      password: '',
      username: '',
      firstName: '',
      lastName: '',
      neighborhood: '',
      role: '',
      city: '',
      street: '',
      phone: '',

    });
    // 
    const {data} = useQuery(GET_PARTNER_BY_PHONE_MUTATION, {
        variables: {
          phone: formState.phone,
        },
        client,
        requestPolicy: 'cache-first',
        onCompleted: getPartner => {
          console.log('getPartner');
          if (getPartner.partnerByPhone === null) {

            console.log(formState.phone);
            console.log('(', formState.phone.length, ')');
            setFormState({
                ...formState,
                personExists: false,
              })
            console.log('No Partner exist');
          } else {
            console.log('Partner exist');
            console.log(getPartner.partnerByPhone );
            setFormState({
                ...formState,
                personExists: true,
                partner: getPartner.partnerByPhone.partner,
                firstName: getPartner.partnerByPhone.partner.user.firstName,
                lastName: getPartner.partnerByPhone.partner.user.lastName,
                role: getPartner.partnerByPhone.partner.role
              })
          }
        },
      });

    console.log(formState)
        return (
            <>
            <div className="content">
              <Row>
                <Col md="8">
                  <Card>
                    <CardHeader>
                    </CardHeader>
                    <CardBody>
                        
                      <Form>
    
                        <Row>
                            <Col className="pr-md-1" md="8">
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
                            
                            </Row>                        
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                {formState.personExists ? (
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
                            <h5 className="title">{formState.firstName}</h5>
                          </a>
                          <p className="description">{formState.role}</p>
                        </div>
                        {/* <div className="card-description">
                          Do not be scared of the truth because we need to restart the
                          human foundation in truth And I love you like Kanye loves
                          Kanye I love Rick Owens’ bed design but the back is...
                        </div> */}
                      </CardBody>
                      <CardFooter>
                        <div className="button-container">
                            {formState.role === 'student' ? (             
                                <p>This is a Student,  cannot be a salesperson</p>
                                       ) : (
                                        <Link to={{pathname: `/admin/add-store/`,
                                        query: {
                                            partner: formState.partner,
            
                                          } 
                                      }}>Assign Store</Link>
                      )

                }
                        </div>
                      </CardFooter>
                    </Card>
                  </Col>
                ): (<></>)}
              </Row>
            </div>
          </>
        )
    }

export default AddsalesPersonProfile;
