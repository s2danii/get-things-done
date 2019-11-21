import React, { Component } from 'react';

class DeleteButton extends Component {
    constructor () {
        super ();
    }

    deleteItem = (event, key) => {
        event.preventDefault();
        
        this.props.dbRef.child(key).remove();
    }

    render () {
        return (
            <div>
                <label htmlFor="deleteButton" className="visuallyHidden">Click button to delete item from To Do List.</label>
                <button name="deleteButton" className="deleteButton" onClick={(e) => this.deleteItem(e, this.props.itemKey)}><i className="fas fa-trash-alt"></i></button>
            </div>
        );
    }
}

export default DeleteButton;