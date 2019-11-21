import React, { Component } from 'react';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';
import ListInfo from './ListInfo';
import EditList from './EditList';

class ListItem extends Component {
    constructor () {
        super ();

        this.state = {
            isInEditMode: false,
        }
    }
    
    changeEditMode = () => {
        this.setState ({
            isInEditMode: !this.state.isInEditMode
        })
    }
    
    doubleClickEdit = (item) => {
        this.props.handleEdit(item);   
        this.changeEditMode();
    }

    render () {
        let index = this.props.index
        let item = this.props.item

        return (
            <div className="listItem" onDoubleClick={() => this.doubleClickEdit(item)}>
                <div className={item.status ? "listLeftWrapper completeItem" : "listLeftWrapper"}>
                    <CheckBox 
                    handleCheck={this.props.handleCheck}
                    index={this.props.index}
                    status={item.status}/>
                    {this.state.isInEditMode ?
                    <EditList
                    item={item}
                    handleChange={this.props.handleChange}
                    handleEditSubmit={this.props.handleEditSubmit}
                    changeEditMode={this.changeEditMode}/> :
                    <ListInfo
                    item={item}/>}
                    
                </div>

                <DeleteButton
                dbRef={this.props.dbRef}
                itemKey={item.key}/>
            </div>
        )
    }
}

export default ListItem;