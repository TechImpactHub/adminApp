import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
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
const AddVendorProfile = () => {
    const history = useHistory();
    // set form state
    
    
    const [formState, setFormState] = useState({
    partnerResults : false,
     studentExists : false,
     student: [],
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
    const [addStudent] = useMutation(GET_PARTNER_MUTATION, {
      variables: {
        nationalId: formState.nationalId,
      }, 
      client: client,
      onCompleted: (partner) => {
        console.log(partner.getPartner.partner);
        let loaded_partner = partner.getPartner.partner
        if (loaded_partner !== null) {
            let p_vendor = loaded_partner.studentSet.edges;
            console.log(loaded_partner)
            if (p_vendor.length === 0) {
                history.push('/admin/add-student-school', partner)
            }
            else {
                p_vendor.map(student => 
                    setFormState({
                        ...formState,
                        studentExists: true,
                        student: student,
                        username: loaded_partner.user.username,
                        firstName: loaded_partner.user.firstName,
                        lastName: loaded_partner.user.lastName,
                        email: loaded_partner.user.email,
                        role: loaded_partner.partnerRole.role,

                        })
                    )

            }
            
        } 
        else {
            setFormState({
                ...formState,
                partnerResults: true,
                })
        }
      }
    });
    console.log(formState)
    console.log(addStudent)
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
                            
                            </Row> 
                            {formState.partnerResults ? <p>Student of ID {formState.nationalId} not found</p> : (
                                <></>
                            )}
                            {formState.studentExists ? <p>Student of ID {formState.nationalId} exists</p> : (
                                <></>
                            )}
                       
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button 
                      onClick={addStudent}
                      className="btn-fill" color="primary" >
                        Search
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                {formState.studentExists ? (
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

export default AddVendorProfile;
