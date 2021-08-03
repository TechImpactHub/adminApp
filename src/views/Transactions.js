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

class TransactionsList extends React.Component {
    constructor(props) {
        super(props);
// set state of the query object
        this.state = {
            transactions: [],
        }
    }
    // load the query on component mount
    componentDidMount() {
        this.getTransactions();
    };

// call the the query from service
    getTransactions() {
        TransactionDataService.getAllTransactions()
          .then(result => {
            //   pass the query data into component state
              this.setState({
                  transactions : result.data.allTransactions.edges
              })
        }); 
    }
    render() {
        // const {classes} = this.props
        console.log(this.state.transactions)
        const estyles = {
            addButton : {
                margin: "10px"

            }
        }
        return (

    <>
      <div className="content">

        <Row>
          <Col md="10">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Guta Transactions</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Timestamp</th>
                      <th>To</th>
                      <th>From</th>
                      <th className="text-center">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    // loop through state data object and fill the jsx components with state data
                this.state.transactions.map(transaction => (
                    

                    <tr>
                      <td>{transaction.node.date}</td>
                      <td>{transaction.node.To}</td>
                      <td>{transaction.node.From}</td>
                      <td className="text-center">$ {transaction.node.amount}</td>
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



export default withStyles(styles) (TransactionsList);
