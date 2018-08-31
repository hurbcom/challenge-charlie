import React, { Component } from 'react'
import Collapse from '@material-ui/core/Collapse'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import Close from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'
import LocationOn from '@material-ui/icons/LocationOn'
import { connect } from 'react-redux'
import { startSearching } from '../../actions/searching'
import { stopSearching, search } from '../../actions/searching'
import { changeTrans } from '../../actions/changeTrans.actions'
import { bindActionCreators } from 'redux';
import {getWeather} from '../../actions/location.action'



class Search extends Component {

    constructor(props){
        super(props)
        this.state={
            input:'',
            lang:this.props.lang
        }
        this.pressEnter=this.pressEnter.bind(this);
        this.startSearch=this.startSearch.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.stopSearch=this.stopSearch.bind(this);
        this.search=this.search.bind(this);
        this.changeLang=this.changeLang.bind(this);

    }
    // Atualiza o input
    handleChange(e){
        this.setState({
            input:e.target.value
        })
    }
    changeLang(e){
        e.target.value === 'pt'
        ? this.setState({
            lang:'en'
        },()=>this.props.changeTrans(this.state.lang))
        : this.setState({
            lang:'pt'
        },()=>this.props.changeTrans(this.state.lang));
      

    }
    // reconhecimento do enter para a procura
    pressEnter(e){
            if(e.keyCode === 13){
                return (this.state.input === '') ? null : this.search();
            }
    }

    // Efetivamente realiza a procura
    search(){
        const valueInput = this.state.input;
        this.setState({
            input:''
        })
        this.props.search(valueInput)
        
        this.stopSearch()
    }

    // Abre o mecanismo de busca
    startSearch(){

        window.addEventListener("keydown",this.pressEnter);
        this.props.startSearching()       
    }
    // fecha o mecanismo de busca
    stopSearch(){
        this.props.stopSearching()
    }

    componentWillUnmount(){
        window.removeEventListener("keydown",this.pressEnter);
    }

    render() {
        return (
            <div>
                {/* Quando o botao nao for clicado*/}
                <div className="search-off">
                    <SearchIcon onClick={this.startSearch} className="search-icon" />
                    <div className='switch'>
                    <span>EN</span>
                    <Switch onClick={this.changeLang} checked={this.props.lang === 'en' ? false : true}  value={this.props.lang} color="default" />
                    <span>PT</span>
                    </div>
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
                        <SearchIcon onClick={()=> this.state.input === '' ? '' : this.search()} className="search-icon" />
                        <Close onClick={this.stopSearch} className="close" />
                    </div>
                </Collapse>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSearching: state.isSearching,
        lang:state.lang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTrans:bindActionCreators(changeTrans,dispatch),
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
