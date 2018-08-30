import React, { Component } from 'react'
import Collapse from '@material-ui/core/Collapse'
import TextField from '@material-ui/core/TextField'
import Close from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'
import LocationOn from '@material-ui/icons/LocationOn'
import { connect } from 'react-redux'
import { startSearching } from '../../actions/searching'
import { stopSearching, search } from '../../actions/searching'
import { bindActionCreators } from 'redux';
import {getWeather} from '../../actions/location.action'



class Search extends Component {

    constructor(props){
        super(props)
        this.state={
            input:''
        }
        this.pressEnter=this.pressEnter.bind(this);
        this.startSearch=this.startSearch.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.stopSearch=this.stopSearch.bind(this);

    }

    handleChange(e){
        this.setState({
            input:e.target.value
        })
    }

    pressEnter(e){
            if(e.keyCode == 13){
                (this.state.input == '')? null : this.props.search(this.state.input);
                console.log(e.keyCode);     
            }
    }

    startSearch(){
        window.addEventListener("keydown",this.pressEnter);
        this.props.startSearching()
        
    }
    stopSearch(){
        window.removeEventListener("keydown",this.pressEnter);
        this.props.stopSearching()
    }

    render() {
        return (
            <div>
                {/* Quando o botao nao for clicado*/}
                <div className="search-off">
                    <SearchIcon onClick={this.startSearch} className="search-icon" />
                    <LocationOn onClick={this.props.getLocation} className="location-icon" />
                </div>
                {/* Botao clicado*/}
                <Collapse in={this.props.isSearching}>
                    <div className="search-on">
                        <TextField onChange={this.handleChange} inputProps={{
                            style: { textAlign: "center" }
                        }}
                            fullWidth
                            className="search-input" />
                        <SearchIcon onClick={()=> this.state.input == '' ? '' : this.props.search(this.state.input)} className="search-icon" />
                        <Close onClick={this.stopSearch} className="close" />
                    </div>
                </Collapse>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSearching: state.isSearching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLocation:bindActionCreators(getWeather,dispatch),
        search:bindActionCreators(search,dispatch),
        stopSearching: function () {
            dispatch(stopSearching())
        },
        startSearching: function () {
            dispatch(startSearching())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
