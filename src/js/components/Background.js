import React, {Component} from 'react';
import Form from "./Form";
import regeneratorRuntime from "regenerator-runtime";

class Background extends Component {

    state = {
        image: null
    };

    async componentDidMount() {
        const url = "https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.images[0].url);
        this.setState({ image: data.images[0].url})
    }


	render() {

        const siteUrl = 'https://www.bing.com'

		return (
            <div className="main-bg" style={{ backgroundImage: `url(${ siteUrl + this.state.image })` }}>       
                
                <Form></Form>
            </div>			
		);
	}
}
export default Background;