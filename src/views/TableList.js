import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import TransactionDataService from "../services/transaction.service";
import { 
     withStyles } from "@material-ui/core";
import { styles } from "./styles"

class UsersTable extends React.Component {
    constructor(props) {
        super(props);
// set state of the query object
        this.state = {
            partners: [],
        }
    }
    // load the query on component mount
    componentDidMount() {
        this.getPartners();
    };

// call the the query from service
    getPartners() {
        TransactionDataService.getAllPartners()
          .then(result => {
            //   pass the query data into component state
              this.setState({
                  partners : result.data.allPartners.edges
              })
        }); 
    }
    render() {
        // const {classes} = this.props
        console.log(this.state.partners)
        const estyles = {
            addButton : {
                margin: "10px"

            }
        }
        return (
    <>
      <div className="content">
      <Row>
        <Col lg="6" md="12">
            <Link to="add-user-profile">
        <Button style={estyles.addButton}  className="btn-fill" color="secondary">
                  Add Person
        </Button>
        </Link>
        </Col>
    </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Guta Users</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      {/* <th>ID</th> */}
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Role</th>
                      <th className="text-center">Wallet Balance</th>
                      <th className="text-center">more</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    // loop through state data object and fill the jsx components with state data
                this.state.partners.map(partner =>
                    (

                    <tr>
                      {/* <td>{partner.node.partnerUuid}</td> */}
                      <td>{partner.node.user.firstName}</td>
                      <td>{partner.node.user.lastName}</td>
                      <td>{partner.node.role}</td>
                      
                      {/* {partner.node.person.personroleSet.edges.map(role => (
                      <td>{role.node.roleId.role}</td>
  )) } */}
  
                      <td className="text-center">$36,738</td>
                      <td className="text-center">
             { partner.node.contactSet.edges.map(contactData => 

                          <Link to={{pathname: `/admin/edit-user-profile/${partner}`,
                            query: {
                                partner: partner,
                                contactData: contactData

                              } 
                          }}>more</Link>
                )}
                      </td>
                    </tr>
                     ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
        )
    }
}



export default withStyles(styles) (UsersTable);
