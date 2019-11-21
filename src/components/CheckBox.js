import React from 'react';

function CheckBox (props) {
    return (
        <div className="checkBox" title="Mark as complete" aria-label="Mark task as complete." onClick={(e) => props.handleCheck(e, props.index)}>
            <i className={props.status ? "fas fa-check-circle" :"far fa-circle"}></i>
        </div>
    )
}

export default CheckBox;