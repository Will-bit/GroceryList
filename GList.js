import React, { Component } from "react";
import GItems from "./GItems";

import "./TodoList.css";

class GList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        //this.editItem = this.editItem.bind(this)
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var dt = new Date();
           /// var utcDate = dt.toUTCString();
          //  console.log(utcDate);
            var newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                timestamp:  dt.toUTCString()
               
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };

            });
        }
        this._inputElement.value = "";
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });
        this.setState({
            items: filteredItems
        });
       /* this.editItem(key){
            var
        }*/
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="enter text">
                        </input>
                        <button type="submit">add</button>
                        <p>{this.timestamp} </p>
                    </form>
                   
                </div>
                <GItems entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        );

    }
}

export default GList;