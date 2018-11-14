import './style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux' ;

class OtherDay extends Component {

    constructor(props){
        super(props);
        this.state = {
            forecast: {}, 
            unit: 'C'
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({unit: nextProps.unit})
    }

    render() {
        let { low, high, text } = this.props.forecast;
        let { unit }  = this.state;
        let { title } = this.props;

        return(
            <div className="otherDays">
                <div className="otherDays__title">
                    {title}
                </div>
                <div className="otherDays__info">
                {
                    low + unit +  
                    " ~ " +
                    high + unit
                } 
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
    ({ unit: state.unit  });

export default connect(mapStateToProps , null)(OtherDay);