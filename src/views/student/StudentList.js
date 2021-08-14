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
import { GET_STUDENTS } from '../../services/query';
import {client} from '../../gql-config';
import { 
     withStyles } from "@material-ui/core";
import { styles } from "../styles"

class StudentList extends React.Component {
    constructor(props) {
        super(props);
// set state of the query object
        this.state = {
            students: [],
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
            query: GET_STUDENTS
          })
          .then(result => {
            //   pass the query data into component state
              this.setState({
                  students : result.data.allStudents.edges
              })
        }); 
    }
    render() {
        // const {classes} = this.props
        console.log(this.state.students)
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
                  Add Student
        </Button>
        </Link>
        </Col>
    </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Guta Students</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>School</th>
                      <th className="text-center">Wallet Balance</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    // loop through state data object and fill the jsx components with state data
                this.state.students.map(student =>
                    (

                    <tr>
                      <td>{student.node.partner.user.firstName}</td>
                      <td>{student.node.partner.user.lastName}</td>
                      { student.node.partner.schoolSet.edges.length === 0 ? (
                        <td>
                        
                        <Link to={{pathname: `/admin/add-student-school/`,
                                                            query: {
                                                                partner: student
                                                              } 

}}>add school</Link>
                        </td>
                      ) : (
                        <td>
                            {
                                student.node.partner.schoolSet.edges.map(school => 
                                    <Link to={{pathname: `/admin/edit-school-profile/`,
                                    query: {
                                        school: school,
                        
        
                                      } 

                                }}>school</Link>
                                    )}
                            </td>
                      )
                      
    } { student.node.partner.walletSet.edges.length === 0 ? (
        <td>
                        
        <Link to={{pathname: `/admin/edit-user-profile/`,

}}>add funds</Link>
        </td>
      ) : (
        <td>
            {
                student.node.partner.walletSet.edges.map(wallet => 
                    <Link to={{pathname: `/admin/edit-user-profile/`,

                }}>{wallet.currentBalance}</Link>
                    )}
            </td>
    )}
                      <td className="text-center">
             { student.node.partner.contactSet.edges.map(contactData => 

                          <Link to={{pathname: `/admin/edit-user-profile/${student}`,
                          query: {
                            partner: student,
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



export default withStyles(styles) (StudentList);
