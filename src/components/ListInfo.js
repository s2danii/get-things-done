import React from 'react';

function ListInfo (props) {
    return (
        <div className="listInfo">
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
            <p>{props.item.dueDate !== props.date ? props.item.dueDate : 'Today' }</p>
        </div>
    )
}

export default ListInfo;