import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {ADD_SCHOOL_MUTATION} from '../../services/mutations';

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

const EditSchoolProfile = (props) => {
    
    const history = useHistory();
    console.log(props.location.query.school)

    const [formState, setFormState] = useState({
      partnerUuid : "728352dd-dc06-4d84-b60b-62fdc89348fd",
      name: props.location.query.school.node.name,
      schoolUuid: props.location.query.school.node.schoolUuid,
      category: props.location.query.school.node.category.category,

    });
    
    const [signup] = useMutation(ADD_SCHOOL_MUTATION, {
      variables: {
        name: formState.name,
        schoolUuid: formState.schoolUuid,
        partnerUuid: formState.partnerUuid,
        category: formState.category,
      }, 
      client: client,
      onCompleted: (school) => {
        console.log(school);
        history.push('/admin/schools');
      }
    });
    console.log(formState)
    console.log(signup)
        return (
            <>
            <div className="content">
              <Row>
                <Col md="8">
                  <Card>
                    <CardHeader>
                      <h5 className="title">Edit {formState.name}</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
    
                        <Row>
                            <Col className="pr-md-1" md="8">
                            <FormGroup>
                              <label>Name</label>
                              <Input
                                        value={formState.name}
                                        onChange={(e) =>
                                          setFormState({
                                            ...formState,
                                            name: e.target.value
                                          })
                                        }
                                placeholder="school name"
                                type="text"
                              />
                            </FormGroup>
                            </Col>
                            <Col className="pr-md-1" md="4">
                            <FormGroup>
        <label htmlFor="category">Select Category</label>
        <Input className="pr-md-1"
                value={formState.category}
                onChange={(e) =>
                    setFormState({
                    ...formState,
                    category: e.target.value
                    })
                }
        type="select" name="category" id="category">
          <option value="ecd">ECD</option>
          <option value="primary">PRIMARY</option>
          <option value="high">HIGH SCHOOL</option>
        </Input>
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

export default EditSchoolProfile;
