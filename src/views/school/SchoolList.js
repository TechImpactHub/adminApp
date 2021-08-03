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
import { 
     withStyles } from "@material-ui/core";
import { styles } from "../styles"

class SchoolList extends React.Component {
    constructor(props) {
        super(props);
// set state of the query object
        this.state = {
            schools: [],
        }
    }
    // load the query on component mount
    componentDidMount() {
        this.getSchools();
    };

// call the the query from service
    getSchools() {
        TransactionDataService.getAllSchools()
          .then(result => {
            //   pass the query data into component state
              this.setState({
                  schools : result.data.allSchools.edges
              })
        }); 
    }
    render() {
        // const {classes} = this.props
        console.log(this.state.schools)
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
            <Link to="add-school-profile">
        <Button style={estyles.addButton}  className="btn-fill" color="secondary">
                  Add School
        </Button>
        </Link>
        </Col>
    </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Guta Schools</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th className="text-center">more</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    // loop through state data object and fill the jsx components with state data
                this.state.schools.map(school =>
                    (

                    <tr>
                      <td>{school.node.name}</td>
                      <td>{school.node.category.category}</td>
                    
                      <td className="text-center">

                          <Link to={{pathname: `/admin/edit-school-profile/${school}`,
                            query: {
                                school: school

                              } 
                          }}>more</Link>
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



export default withStyles(styles) (SchoolList);
