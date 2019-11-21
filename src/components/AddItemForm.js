import React from 'react';

function AddItemForm (props) {
    return (
        <div className="addItemOverlay">
            <div className="addItemModal">
                <button className="closeModal" onClick={props.closeButton}><i className="far fa-times-circle"></i></button>
                <h3>Add Item</h3>
                <form onSubmit={props.handleSubmit}>
                    {/* Title input field */}
                    <label htmlFor="title" className="visuallyHidden">Enter a title for the task.</label>
                    <input type="text"
                    name="title"
                    className="title"
                    placeholder="Title"
                    required
                    onChange={props.handleChange}/>
                    {/* Description input field */}
                    <label htmlFor="description" className="visuallyHidden">Enter a task description.</label>
                    <input type="text"
                    name="description"
                    className="description" 
                    placeholder="Description"
                    onChange={props.handleChange}/>
                    {/* Date input field */}
                    <label htmlFor="dueDate" className="visuallyHidden">Choose a due date to complete task.</label>
                    <input type="date"
                    name="dueDate"
                    className="dueDate"
                    onChange={props.handleChange}/>
                    
                    <label htmlFor="addButton" className="visuallyHidden">Click button to add new item to To Do List.</label>
                    <button name="addButton" className="addButton">Save</button>
                </form>
            </div>
        </div>
    );
}

export default AddItemForm;