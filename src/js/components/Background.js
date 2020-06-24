import React, {Component} from 'react';
import regeneratorRuntime from "regenerator-runtime";
import styled from 'styled-components'

const BackgroundImg = styled.div`
    width: 100%;
    height: 100%;
`;


class Background extends Component {

    state = {
        image: null,
    };

    async componentDidMount() {
        const url = "https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ image: data.images[0].url});
    }


	render() {

        const siteUrl = 'https://www.bing.com'

		return (
            <BackgroundImg className="main-bg" style={{ backgroundImage: `url(${ siteUrl + this.state.image })` }}>           
                {this.props.children}            
            </BackgroundImg>			
		);
	}
}
export default Background;