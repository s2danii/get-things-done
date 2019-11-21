import React from 'react';

function EditList (props) {

    const saveEdit = (e) => {
        props.handleEditSubmit(e, props.item.key);
        props.changeEditMode();
    }

    return (
        <div className="listInfo editInfo">
            <form onSubmit={(e) => saveEdit(e)}>
                {/* Title input field */}
                <label htmlFor="title" className="visuallyHidden">Enter a title for the task.</label>
                <input type="text" 
                defaultValue={props.item.title}
                className="title"
                name="title"
                onChange={props.handleChange}/>
                {/* Description input field */}
                <label htmlFor="description" className="visuallyHidden">Enter a task description.</label>
                <input type="text" 
                defaultValue={props.item.description}
                className="description"
                name="description"
                onChange={props.handleChange}/>
                {/* Date input field */}
                <label htmlFor="dueDate" className="visuallyHidden">Choose a due date to complete task.</label>
                <input type="date" 
                defaultValue={props.item.dueDate}
                className="dueDate"
                name="dueDate"
                onChange={props.handleChange}/>
                <button className="addButton">Save</button>
            </form>
        </div>
    )
}

export default EditList;