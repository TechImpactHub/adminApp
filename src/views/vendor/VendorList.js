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
import TransactionDataService from "../../services/transaction.service";
import { GET_VENDORS } from '../../services/query';
import {client} from '../../gql-config';

import { 
     withStyles } from "@material-ui/core";
import { styles } from "../styles"

class VendorList extends React.Component {
    constructor(props) {
        super(props);
// set state of the query object
        this.state = {
            vendors: [],
        }
    }
    // load the query on component mount
    componentDidMount() {
        this.getPartners();
    };

// call the the query from service
    getPartners() {
        client
        .query({
          query: GET_VENDORS
        })
          .then(result => {
            //   pass the query data into component state\\
            console.log('result');
            // console.log(result);
              this.setState({
                  vendors : result.data.allVendors.edges
              })
        }); 
    }
    render() {
        // const {classes} = this.props
        console.log('this.state.vendors node')
        console.log(this.state.vendors)
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
            <Link to="add-vendor-profile">
        <Button style={estyles.addButton}  className="btn-fill" color="secondary">
                  Add Vendor
        </Button>
        </Link>
        </Col>
    </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Guta Vendors</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Phone Number</th>
                      <th className="text-center">Wallet Balance</th>
                      <th className="text-center">more</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    // loop through state data object and fill the jsx components with state data
                this.state.vendors.map(vendor =>
                    
                    (
                        vendor.node.partner === null ? (
                            <tr><td>            <Link to={{pathname: `/admin/add-store/`,
                            query: {
                                partner: vendor.partner,

                              } 

                        }}>ADD VENDOR BUSINESS</Link></td></tr>
                        ) : (
                            <tr>
                            <td>{vendor.node.partner.user.firstName}</td>
                            <td>{vendor.node.partner.user.lastName}</td>
                            {vendor.node.partner.contactSet.edges.map(contact  =>
                            <td>{contact.node.phone}</td>
                            )}
        {vendor.node.partner.walletSet.edges.map(walletData => 
        walletData === null ? (

    <td className="text-center">
                {vendor.node.partner.contactSet.edges.map(contact  =>
            <Link to={{pathname: `/admin/edit-user-profile/`,

                        }}>No Wallet</Link>
                )}
  </td>
        ) : (
            
            <td className="text-center">
                {vendor.node.partner.contactSet.edges.map(contact  =>
            <Link to={{pathname: `/admin/edit-user-profile/`,
    
                        }}>$ {walletData.node.currentBalance}</Link>
                )}
    </td>
        )
                            
        )}
                            <td className="text-center">
                            {vendor.node.partner.contactSet.edges.map(contact  =>
                                <Link to={{pathname: `/admin/edit-user-profile/${vendor}`,
                                  query: {
                                      vendor: vendor,
                                      contact: contact
      
                                    } 
                                }}>Edit</Link>
                                )}
                            </td>
                          </tr>
                        )

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



export default withStyles(styles) (VendorList);
