import React from 'react';
import ListItem from './ListItem';

function List (props) {
    return (
        <div className="wrapper">
            {props.listLength > 0 ?
            props.toDoList.map((item, index) => {
                return (
                    <ListItem
                    key={index}
                    index={index}
                    item={item}
                    date={props.date}
                    handleCheck={props.handleCheck}
                    handleEdit={props.handleEdit}
                    handleSubmit={props.handleSubmit}
                    dbRef={props.dbRef}
                    handleChange={props.handleChange}
                    handleEditSubmit={props.handleEditSubmit}
                    />
                )
            }): <p className="noItems">No items yet!</p>}
        </div>
    );
}

export default List;