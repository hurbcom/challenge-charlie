import React, { Component } from 'react'
import Collapse from '@material-ui/core/Collapse'
import TextField from '@material-ui/core/TextField'
import Close from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'
import { connect } from 'react-redux'
import {startSearching} from '../../actions/searching'
import {stopSearching} from '../../actions/searching'


class Search extends Component {
    render() {
        return (
            <div>
            <div className="search-off">
                    <SearchIcon onClick={this.props.startSearching} className="search-icon" />
                </div>
            <Collapse in={this.props.isSearching}>
                <div className="search-on">
                    <TextField inputProps={{
                        style: { textAlign: "center" }
                    }}
                        fullWidth
                        className="search-input" />
                    <Close onClick={this.props.stopSearching} className="close" />
                </div>
            </Collapse>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
return{
    isSearching:state.isSearching
}
}

const mapDispatchToProps = (dispatch)=>{
return{
    stopSearching:function(){
        dispatch(stopSearching())
    },
    startSearching:function(){
        dispatch(startSearching())
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)
