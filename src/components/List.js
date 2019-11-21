import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor () {
        super ();
    }

    render () {
        return (
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
            })
        );
    }
}

export default List;