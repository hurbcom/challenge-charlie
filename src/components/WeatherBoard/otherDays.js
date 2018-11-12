import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class OtherDay extends Component {

    constructor(props){
        super(props);
        this.state = {
            forecast: {}, 
            unit: 'F'
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
            <div className="tomorrow-result">
                <div>
                    {title}
                </div>
                <div>
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