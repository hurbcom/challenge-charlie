import React, { Component } from 'react';
import { BackgroundImg } from './BackgroundStyle';


class Background extends Component {

    state = {
        image: null,
    };

    componentDidMount = async () => {
        const url = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
        const response = await fetch(url)
        const data = await response.json();
        this.setState({ image: data.images[0].url});
    }


	render() {

        const siteUrl = "https://www.bing.com/th?id=OHR.Mobula_ROW4335910337_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"

		return (
            <BackgroundImg className="main-bg" style={{ backgroundImage: `url(${ siteUrl + this.state.image })` }}>           
                {this.props.children}            
            </BackgroundImg>			
		);
	}
}

export default Background;