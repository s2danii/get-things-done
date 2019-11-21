import React, { Component } from 'react';

class AddItemForm extends Component {
    constructor () {
        super ();
    }

    render () {
        return (
            <div className="addItemBox">
                <button className="closeModal" onClick={this.props.closeButton}><i className="far fa-times-circle"></i></button>
                <h3>Add Item</h3>
                <form onSubmit={this.props.handleSubmit}>
                    {/* Title input field */}
                    <label htmlFor="title" className="visuallyHidden">Enter a title for the task.</label>
                    <input type="text"
                    name="title"
                    className="title"
                    placeholder="Title"
                    onChange={this.props.handleChange}/>
                    {/* Description input field */}
                    <label htmlFor="description" className="visuallyHidden">Enter a task description.</label>
                    <input type="text"
                    name="description"
                    className="description" 
                    placeholder="Description"
                    onChange={this.props.handleChange}/>
                    {/* Date input field */}
                    <label htmlFor="dueDate" className="visuallyHidden">Choose a due date to complete task.</label>
                    <input type="date"
                    name="dueDate"
                    className="dueDate"
                    onChange={this.props.handleChange}/>
                    
                    <label htmlFor="addItem" className="visuallyHidden">Click button to add new item to To Do List.</label>
                    <button name="addItem" className="addItem">Save</button>
                </form>
            </div>
        );
    }
}

export default AddItemForm;