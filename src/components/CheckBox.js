import React, { Component } from 'react';

class CheckBox extends Component {
    constructor () {
        super ();
    }

    render () {
        return (
            <div className="checkBox" onClick={(e) => this.props.handleCheck(e, this.props.index)}>
                <i className={this.props.status ? "fas fa-check-circle" :"far fa-circle"}></i>
            </div>
        )
    }
}

export default CheckBox;