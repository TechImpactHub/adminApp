import React, { Component} from "react";
import { styles } from "../../css-common"
import { TextField, Button, withStyles } from "@material-ui/core";

import TransactionDataService from "../../services/transaction.service";

// create component
class AllTags extends Component {
    constructor(props) {
        super(props);
// set state of the query object
        this.state = {
            persons: [],
        }
    }
    // load the query on component mount
    componentDidMount() {
        this.getPersons();
    };

// call the the query from service
    getPersons() {
        TransactionDataService.getAllPersons()
          .then(result => {
            //   pass the query data into component state
              this.setState({
                  persons : result.data.allUsers.edges
              })
        }); 
    }
    
    // call the  state and render the query data in render method
    render() {
        console.log(this.state.persons)
        // this.state.persons.map(tag => {
        //     console.log(tag.node.id)
        //     return <p>{tag.node.id}</p>
        // })
        
        return (
            <div>
                {
                    // loop through state data object and fill the jsx components with state data
                this.state.persons.map(person => (

                    
                    <p>{person.node.person.id}</p>
                    // <p>{person.node.person}</p>
                 ))}
                
            </div>
        )}

}

export default withStyles(styles)(AllTags)