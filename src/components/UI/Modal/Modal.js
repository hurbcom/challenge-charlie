import React, {Component} from 'react';

import classes from '../Modal/Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Modal extends Component {


    //Poderia ser um functional component, só loquei como class pra ter o controle do lifecycle hooks
    //pra ver quando ele renderiza ou não com esses shouldComponentUpdate e o componentWillUpdate
    
    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    UNSAFE_componentWillUpdate () {
        console.log('[Modal] WillUpdate!');
    }

    render () {
        return (
            <Auxiliary>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            <div className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
    
                {this.props.children}
            </div>
        </Auxiliary>
        )
    }
}

export default Modal;

//ternary expression ? value if true : value if false