import React, { Component} from "react";
import { styles } from "../css-common"
import { TextField, Button, withStyles } from "@material-ui/core";

import TransactionDataService from "../services/transaction.service";

// create component
class AllTags extends Component {
    constructor(props) {
        super(props);
// set state of the query object
        this.state = {
            tags: [],
        }
    }
    // load the query on component mount
    componentDidMount() {
        this.getTags();
    };

// call the the query from service
    getTags() {
        TransactionDataService.getAllTags()
          .then(result => {
            //   pass the query data into component state
              this.setState({
                  tags : result.data.allTags.edges
              })
        }); 
    }
    
    // call the  state and render the query data in render method
    render() {
        console.log(this.state.tags)
        // this.state.tags.map(tag => {
        //     console.log(tag.node.id)
        //     return <p>{tag.node.id}</p>
        // })
        
        return (
            <div>
                {
                    // loop through state data object and fill the jsx components with state data
                this.state.tags.map(tag => (
                    <p>{tag.node.id}</p>
                 ))}
                
            </div>
        )}

}

export default withStyles(styles)(AllTags)