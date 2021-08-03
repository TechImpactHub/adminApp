import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {ADD_BUSINESS_STORE_MUTATION} from '../../services/mutations';

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

const EditStoreBusiness = (props) => {
    console.log(props);
    // let sales_person = props.location.state.partner
    // console.log(sales_person.nationalId)


    
    const history = useHistory();

    // set form state
    const [formState, setFormState] = useState({
      isFetching: true,
      loggedInUser : 'admin@gutaapp.com',
      partner: '',
      partnerUuid: '',
      nationalId: props.location.query.partner.nationalId,
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
      storeName: props.location.store.node.name,
      subcategory: props.location.store.node.subcategory,
      tag: ''
    });

            
    const [addVendor] = useMutation(ADD_BUSINESS_STORE_MUTATION, {
      variables: {
        nationalId: formState.nationalId,
        storeName: formState.storeName,
        subcategory: formState.subcategory,
      }, 
      client: client,
      onCompleted: (vendor) => {
        console.log(vendor);
        history.push('vendors');
      }
    });
    console.log(formState)

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
                              <label>Store Name</label>
                              <Input
                                        value={formState.storeName }
                                        onChange={(e) =>
                                            setFormState({
                                            ...formState,
                                            storeName: e.target.value
                                            })
                                        }
                                placeholder="Store Name"
                                type="text"
                              />
                            </FormGroup>
                              </Col>
                          </Row>
    
                        <Row>
                        <Col className="pr-md-1" md="6">
                              <FormGroup>
                              <label>Store Custom Category</label>
                              <Input 
                                        value={ formState.subcategory}
                                        onChange={(e) =>
                                            setFormState({
                                            ...formState,
                                            subcategory: e.target.value
                                            })
                                        }
                                placeholder="Store Custom Category"
                                type="text"
                              />
         
                              
                            </FormGroup>
                              </Col>
                            </Row> 
                       
                      </Form>
                    </CardBody>
                    {formState.storeName === '' ? (<CardFooter>
                      <Button  disabled={true}
                      onClick={addVendor}
                      className="btn-fill" color="primary" >
                        Edit Store
                      </Button>
                    </CardFooter>) : (<CardFooter>
                      <Button 
                      onClick={addVendor}
                      className="btn-fill" color="primary" >
                        Edit Store
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

export default EditStoreBusiness;
