import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor () {
        super ();
    }

    render () {
        return (
            <div className="wrapper">
                {this.props.listLength > 0 ?
                this.props.toDoList.map((item, index) => {
                    return (
                        <ListItem
                        key={index}
                        index={index}
                        item={item}
                        handleCheck={this.props.handleCheck}
                        dbRef={this.props.dbRef}
                        />
                    )
                }): <p className="noItems">No items yet!</p>}
            </div>
        );
    }
}

export default List;