import React, { Component } from 'react';
import { ContainerStyles } from './ContainerStyles';

class Container extends Component {

	render() {

		return (
            <ContainerStyles>           
                {this.props.children}            
            </ContainerStyles>			
		);
	}
}
export default Container;