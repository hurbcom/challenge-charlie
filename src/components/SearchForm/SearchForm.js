import React, { Component } from 'react';
import './SearchForm.css';
// import { withRouter } from 'react-router-dom'; // ver se precisa mesmo


class SearchForm extends Component {

    state = {
        suggestions: [],
        fetchedHotels: [],
        searchString: '',
        final: '',
        backdrap: false,
        nowUsing: false,
    };

    componentDidMount () {
    }
    searchEventHandler = (event) => {
        if (!this.state.nowUsing) {
            this.setState({clients: this.props.clis, nowUsing: true})
        }
        this.setState({
            searchString: event.target.value,
            backdrap: true,
        })

        let libraries = this.state.suggestions
        let searchString = this.state.searchString.trim().toLowerCase()
        if (searchString.length > 0) {
            libraries = libraries.filter( i => i.toLowerCase().match( searchString ) )
        }
        this.setState({final: libraries, backdrap: true, triggerSuggestion: true})
    }

    useSearchHandler = () => {

    }

    endOfSearchHandler = (nome) => {
        let found = this.props.clis.filter(itens => this.state.final.includes(itens.nome))
        const sString = this.state.searchString
        console.log(found)
        this.funcaoReload()
        this.props.onEndOfSearch(found, sString)

    }

    successfulSearchHandler = (nome) => {
        let retrouvè = this.props.clis.filter(itens => nome.includes(itens.nome))
        console.log(retrouvè)
        this.funcaoReload()
        this.props.onSuccessfulSearch(retrouvè)

    }

    funcaoReload = (param) => {
        this.setState({searchString: ''})
        this.setState({backdrap: false})
    }

    productSelectedHandler = (prodName) => {
        this.setState({ searchString: prodName, backdrap: false, triggerSuggestion: false })

    }
    suggestionSelected (optionClicked) {
        console.log(optionClicked)
        const agoraSim = optionClicked;
        this.setState({text1a: agoraSim})
    

        // this.props.functionHandler(this.state.text)
        console.log(this.state.text1a);
    }

    render() {

        const text = this.state.searchString;
        let backdrap = null;
        let sugestoes = null;
        let sugestoesEmContainer = null;
        if (this.state.searchString && this.state.triggerSuggestion) {
            sugestoes = (
                this.state.final.map(
                    sugestaoUnica => {
                        return ( 
                        <div className='sugItem' onClick={() => this.successfulSearchHandler(sugestaoUnica)}>
                            {sugestaoUnica}
                        </div>
                        )
                    }
                )
            ) 
            sugestoesEmContainer = (
                <div className='formSuggestionsContainer'>{sugestoes}</div>
            )
        }
        if (this.state.backdrap) {
            backdrap = (
                <div className='Backdrap' onClick={this.funcaoReload}></div>
            )
        }

        return (
                    <div className='fHeader'>
                    <button className='formBtn1' onClick={() => this.endOfSearchHandler()}>
                        (
                    </button>
                        <div className='fContainer'>
                            <input     onKeyPress={event => {
                                          if (event.key === 'Enter') {this.endOfSearchHandler()}}}
                                         autoComplete="off" 
                                         value={text} 
                                         onChange={this.searchEventHandler} 
                                         name="city" 
                                         key="teste"
                                         placeholder="Rio de Janeiro, Rio de Janeiro" 
                                         className='FormControl'
                                         onClick={()=> this.useSearchHandler()}
                                         autoFocus 
                                         />
                                         {sugestoesEmContainer}
 
                            
                        </div>
                                                            {backdrap}
                    </div>


        );
    }
};



export default SearchForm;