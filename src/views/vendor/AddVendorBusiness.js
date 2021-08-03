import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {ADD_VENDOR_BUSINESS_MUTATION} from '../../services/mutations';
import { CATEGORY_LIST_QUERY } from '../../services/query';

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
      categories: [],
      tags: [],
      businessName: '',
      subcategory: '',
      category: '',


    });
    console.log(formState);
    // GET COMPONENT data
        //get schools data
        useQuery(CATEGORY_LIST_QUERY, 
            {client:client,
            onCompleted: (recieved_categories) => {
              console.log(recieved_categories);
              const vendor = props.location.state.addVendor.vendor;
              console.log(vendor);
              vendor.partner.contactSet.edges.map(contact => 
                setFormState({
                    ...formState,
                    isFetching: false,
                    categories : recieved_categories,
                    partner: vendor.partner,
                    partnerUuid: vendor.partner.partnerUuid,
                    nationalId: vendor.partner.nationalId,
                    username: vendor.partner.user.username,
                    firstName: vendor.partner.user.firstName,
                    lastName: vendor.partner.user.lastName,
                    email: vendor.partner.user.email,
                    role: vendor.partner.partnerRole.role,
                    city: contact.node.city,
                    neighborhood: contact.node.neighborhood,
                    street: contact.node.street,
                    phone: contact.node.phone,
                    })
              )
            }})
            
    const [addVendor] = useMutation(ADD_VENDOR_BUSINESS_MUTATION, {
      variables: {
        nationalId: formState.nationalId,
        businessName: formState.businessName,
        category: formState.category,
        subcategory: formState.subcategory,
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
                              <Col className="pr-md-1" md="6">
                              <FormGroup>
                              <label>Business Name</label>
                              <Input
                                        value={formState.businessName}
                                        onChange={(e) =>
                                            setFormState({
                                            ...formState,
                                            businessName: e.target.value
                                            })
                                        }
                                placeholder="Business Name"
                                type="text"
                              />
                            </FormGroup>
                              </Col>
                          </Row>
    
                        <Row>
                        <Col className="pr-md-1" md="6">
                              <FormGroup>
                              <label>Business Custom Category</label>
                              <Input 
                                        value={formState.subcategory}
                                        onChange={(e) =>
                                            setFormState({
                                            ...formState,
                                            subcategory: e.target.value
                                            })
                                        }
                                placeholder="Business Custom Category"
                                type="text"
                              />
                            </FormGroup>
                              </Col>
                            {formState.isFetching ? <p>Loading Categories ...</p> : (
                                                            <Col className="pr-md-1" md="4">                  
                                                            <FormGroup>
                                        <label htmlFor="school">Select General Category</label>
                                        <Input className="pr-md-1"
                                                value={formState.category}
                                                onChange={(e) =>
                                                    setFormState({
                                                    ...formState,
                                                    category: e.target.value
                                                    })
                                                }
                                        type="select" name="school" id="school">
                                            <option></option>
                                {
formState.categories.allBusinessCategories.edges.length === 0 ? (<option value="Food">Food</option>) : (
    formState.categories.allBusinessCategories.edges.map(cat => 
    <option value={cat.node.id}>{cat.node.category}</option>
))}
                                        </Input>
                                        
                                      </FormGroup>
                                        </Col>
                            )}

                            </Row> 
                       
                      </Form>
                    </CardBody>
                    {formState.businessName === '' ? (<CardFooter>
                      <Button  disabled={true}
                      onClick={addVendor}
                      className="btn-fill" color="primary" >
                        Add Business
                      </Button>
                    </CardFooter>) : (<CardFooter>
                      <Button 
                      onClick={addVendor}
                      className="btn-fill" color="primary" >
                        Add Business
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
