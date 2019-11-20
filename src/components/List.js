import React, { Component } from 'react';
import CheckBox from './CheckBox';

class List extends Component {
    constructor () {
        super ();
    }

    render () {
        return (
            this.props.toDoItems.map((item, index) => {
                return (
                    <div className="listItem" key={index}>
                        <CheckBox 
                        handleCheck={this.props.handleCheck}
                        index={index}
                        status={item.status}/>
                        <div className="listInfo">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>{item.status ? 'complete' : 'pending'}</p>
                            <p>{item.dueDate}</p>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default List;