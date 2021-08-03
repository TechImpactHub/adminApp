import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {ADD_VENDOR_MUTATION} from '../../services/mutations';
import { SCHOOLS_LIST_QUERY } from '../../services/query';

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

import { useQuery } from '@apollo/client';
const AddVendorSchool = (props) => {
    console.log(props);
    const history = useHistory();

    // set form state
    const [formState, setFormState] = useState({
      isFetching: true,
      loggedInUser : 'admin@gutaapp.com',
      partner: '',
      partnerUuid: '',
      schoolUuid: '',
      nationalId: '',
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      role: '',
      neighborhood: '',
      city: '',
      street: '',
      phone: '',
      schools: [],

    });
    console.log(formState);
    // GET COMPONENT data
        //get schools data
        useQuery(SCHOOLS_LIST_QUERY, 
            {
            client:client,
            onCompleted: (recieved_schools) => {
              console.log(recieved_schools);
              const partner = props.location.state.getPartner.partner;
              console.log(partner);
              partner.contactSet.edges.map(contact => 
                setFormState({
                    ...formState,
                    isFetching: false,
                    schools : recieved_schools,
                    partner: partner,
                    partnerUuid: partner.partnerUuid,
                    nationalId: partner.nationalId,
                    username: partner.user.username,
                    firstName: partner.user.firstName,
                    lastName: partner.user.lastName,
                    email: partner.user.email,
                    role: partner.partnerRole.role,
                    city: contact.node.city,
                    neighborhood: contact.node.neighborhood,
                    street: contact.node.street,
                    phone: contact.node.phone,
                    })
              )
            }})
            
    const [addVendor] = useMutation(ADD_VENDOR_MUTATION, {
      variables: {
        nationalId: formState.nationalId,
        schoolUuid: formState.schoolUuid,
      }, 
      client: client,
      onCompleted: (vendor) => {
        console.log(vendor);
        history.push('vendors');
      }
    });
    
    console.log(formState)
    console.log(addVendor)
        return (
            <>
            <div className="content">
              <Row>
                  {/* <SearchPartner /> */}
                <Col md="8">
                  <Card>
                    <CardHeader>
                      {/* <h5 className="title">Add Vendor</h5> */}
                    </CardHeader>
                    <CardBody>
                        
                      <Form>
    
                        <Row>
                            <Col className="pr-md-1" md="8">
                            <FormGroup>
                              <label>Partner</label>
                              <Input disabled={true}
                                        value={formState.email}
                                        onChange={(e) =>
                                            setFormState({
                                            ...formState,
                                            school: e.target.value
                                            })
                                        }
                                placeholder="Partner Name"
                                type="text"
                              />
                            </FormGroup>
                            </Col>
                            {formState.isFetching ? <p>Loading Schools ...</p> : (
                                                            <Col className="pr-md-1" md="4">                  
                                                            <FormGroup>
                                        <label htmlFor="school">Select School</label>
                                        <Input className="pr-md-1"
                                                value={formState.schoolUuid}
                                                onChange={(e) =>
                                                    setFormState({
                                                    ...formState,
                                                    schoolUuid: e.target.value
                                                    })
                                                }
                                        type="select" name="school" id="school">
                                            <option></option>
                                {formState.schools.allSchools.edges.map(schl => 

                                          <option value={schl.node.schoolUuid}>{schl.node.name}</option>
                                          )}
                                        </Input>
                                        
                                      </FormGroup>
                                        </Col>
                            )}

                            </Row> 
                       
                      </Form>
                    </CardBody>
                    {formState.schoolUuid === '' ? (<CardFooter>
                      <Button  disabled={true}
                      onClick={addVendor}
                      className="btn-fill" color="primary" >
                        Save
                      </Button>
                    </CardFooter>) : (<CardFooter>
                      <Button 
                      onClick={addVendor}
                      className="btn-fill" color="primary" >
                        Add Vendor
                      </Button>
                    </CardFooter>)}
                    
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

export default AddVendorSchool;
