import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {PARTNERS_LIST_QUERY} from '../../services/query';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { useQuery } from '@apollo/client';
import { data } from 'jquery';

const SearchPartner = (props) => {
    // GET COMPONENT data
        //get partners data
        const part = useQuery(PARTNERS_LIST_QUERY, {client})
        console.log(part.data.allPartners.edges);

    const history = useHistory();
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(() => {

        function GetData (){
            const partners = useQuery(PARTNERS_LIST_QUERY, {client})
            
        const results = partners.data.allPartners.edges.map(data =>
            console.log(data.node),
            data.contactSet.edges.map(contact => 
                console.log(contact)
                (contact.node.filter(person =>
                    person.toLowerCase().includes(searchTerm)
                  ))
            )
            );
        setSearchResults(results);
    }}, [searchTerm]);
    
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };

    const [formState, setFormState] = useState({
      loggedInUser : 'admin@gutaapp.com',
      name: '',
      category: '',

    });
    console.log(searchTerm);
    console.log(searchResults);
    

        return (
            <>
            <div className="content">
              <Row>
                <Col md="8">
        
                      <Form>
    
                        <Row>
                            <Col className="pr-md-1" md="8">
                            <FormGroup>
                              <label>Search Partner by Phone or National ID</label>
                              <Input
                                        value={searchTerm}
                                        onChange={handleChange}
                                placeholder="Phone or National ID"
                                type="text"
                              />
                            </FormGroup>
                            </Col>
                            <Col className="pr-md-1" md="4">
                            <ul>
                                {searchResults.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                            </Col>
                            </Row> 
                       
                      </Form>
    
                </Col>
                
              </Row>
            </div>
          </>
        )
    }

export default SearchPartner;
