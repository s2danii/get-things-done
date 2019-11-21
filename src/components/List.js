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
                        date={this.props.date}
                        handleCheck={this.props.handleCheck}
                        handleEdit={this.props.handleEdit}
                        handleSubmit={this.props.handleSubmit}
                        dbRef={this.props.dbRef}
                        handleChange={this.props.handleChange}
                        handleEditSubmit={this.props.handleEditSubmit}
                        />
                    )
                }): <p className="noItems">No items yet!</p>}
            </div>
        );
    }
}

export default List;