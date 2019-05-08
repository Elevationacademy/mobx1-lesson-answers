import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
        this.props.store.checkItem(e.target.value)
    }
    editItem = (e) => {
        let newLocation = prompt("Edit location")
        this.props.store.editItem(e.target.value, newLocation)
    }
    deleteItem = (e) => {
        this.props.store.deleteItem(e.target.value)
    }
    render() {
        let item = this.props.item
        return (
            <div className = {item.completed ? "crossed": null}>
            <input type="checkbox"
                className = "listItem"
                onClick = {this.checkItem} 
                value={item.name}/> 
                {item.name} - 
                <span className="location">{item.location}</span>
                <button onClick = {this.editItem}
                        value = {item.name}
                        className = "editButton">Edit</button>
                <button onClick = {this.deleteItem}
                        className = "deleteButton"
                        value = {item.name}>Delete</button>
            </div>)
    }
}

export default Item