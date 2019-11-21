import React, { Component } from 'react';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';

class ListItem extends Component {
    constructor () {
        super ();
    }

    render () {
        let index = this.props.index
        let item = this.props.item

        return (
            <div className="listItem">
                <CheckBox 
                handleCheck={this.props.handleCheck}
                index={this.props.index}
                status={item.status}/>
                <div className="listInfo">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.status ? 'complete' : 'pending'}</p>
                    <p>{item.dueDate}</p>
                </div>
                <DeleteButton
                dbRef={this.props.dbRef}
                itemKey={item.key}/>
            </div>
        )
    }
}

export default ListItem;