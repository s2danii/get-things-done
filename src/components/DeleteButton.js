import React from 'react';

function DeleteButton (props) {
    const deleteItem = (event, key) => {
        event.preventDefault();       
        props.dbRef.child(key).remove();
    }
    
    return (
        <div className="listDelete">
            <label htmlFor="deleteButton" className="visuallyHidden">Click button to delete item from To Do List.</label>
            <button name="deleteButton" className="deleteButton" onClick={(e) => deleteItem(e, props.itemKey)}><i className="fas fa-trash-alt"></i></button>
        </div>
    );
}

export default DeleteButton;