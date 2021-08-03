import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation, useQuery } from '@apollo/client';
import {client} from '../../gql-config';
import {GET_PARTNER_MUTATION} from '../../services/mutations';

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

    const {loading, error, data} = useQuery(GET_PARTNER_MUTATION, {
      variables: {
        phone: formState.phone,
      }, 
      client: client,
      onCompleted: (partner) => {
        console.log(partner.partnerByPhone.partner);
        let loaded_partner = partner.partnerByPhone.partner
        if (loaded_partner !== null) {
            let s_person = loaded_partner.salespersonSet.edges;
            console.log(loaded_partner)
            if (s_person.length === 0) {
                history.push('/admin/add-salesperson-business', partner)
            }
            else {
                s_person.map(person => 
                    setFormState({
                        ...formState,
                        personExists: true,
                        person: person,
                        username: loaded_partner.user.username,
                        firstName: loaded_partner.user.firstName,
                        lastName: loaded_partner.user.lastName,
                        email: loaded_partner.user.email,
                        role: loaded_partner.partnerRole.role,

                        })
                    )

            }
            
        } 
        // else {
        //     setFormState({
        //         ...formState,
        //         partnerResults: true,
        //         })
        // }
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
                            {formState.partnerResults ? <p>Student of ID {formState.nationalId} not found</p> : (
                                <></>
                            )}
                            {formState.personExists ? <p>Student of ID {formState.nationalId} exists</p> : (
                                <></>
                            )}
                       
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button 
                      
                      className="btn-fill" color="primary" >
                        Search
                      </Button>
                    </CardFooter>
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
                ): (<></>)}
              </Row>
            </div>
          </>
        )
    }

export default AddsalesPersonProfile;
