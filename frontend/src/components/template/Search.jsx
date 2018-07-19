import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default class Search extends Component { 

    render() {
        return (
        <div className="search col-md-12 d-flex pr-0 pl-0 mb-0">
            {this.props.children}
            <div className="col-md-1 pl-0 pr-0">
                <button className="btn btn-default w-100 h-100 buttonS" onClick={e => {this.props.func(document.querySelectorAll('#search')[0].value, 'C')}}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
        )
    }
}