import React, { Component } from "react";
import FlipMove from 'react-flip-move';
import Logo from "./images.png"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';
//import DeleteIcon from '@material-ui/icons/Delete';
class GItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item) {
        
        return <li onDoubleClick={() => this.delete(item.key)}
            key={item.key}>{item.text}<p>{item.timestamp}</p></li>

       /* return<li onClick={()=> this.edit(item.key)}

        }*/
           
    }
  
    delete(key){

        this.props.delete(key);
    }
    
    edit(key) {

        this.props.edit(key);
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks)

        return (
            <ul className="theList">
                <FlipMove duration = {250} easing ="ease-out">
                {listItems}
                </FlipMove>
             
            </ul>
        );
    }
}

export default GItems;
