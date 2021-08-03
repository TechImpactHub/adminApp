import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {ADD_VENDOR_MUTATION} from '../../services/mutations';
import { PARTNERS_LIST_QUERY } from '../../services/query';

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

const SearchPartner = (props) => {
    // GET COMPONENT data
        //get schools data

    const history = useHistory();
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };

    //  React.useEffect(() => {
        
    //     const results = p_data.map(partner => 
    //         partner.filter(person =>
    //       person.toLowerCase().includes(searchTerm)
    //     ));
    //     setSearchResults(results);
    //   }, [searchTerm]);

    // set form state
    const [formState, setFormState] = useState({
      loggedInUser : 'admin@gutaapp.com',
      partner: '',
      schoolUuid: '',
    });


   
    // 
    const [addVendor] = useMutation(ADD_VENDOR_MUTATION, {
      variables: {
        email: formState.loggedInUser,
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
                              <Input
                                        value={formState.email}
                                        onChange={handleChange}
                                placeholder="Partner Name"
                                type="text"
                              />
                            </FormGroup>
                            </Col>
                          
                            </Row> 
                       
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button 
                      onClick={addVendor}
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

export default SearchPartner;
