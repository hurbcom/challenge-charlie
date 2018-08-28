import React, { Component } from 'react';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { image: null };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/background')
            .then(body => body.json())
            .then(res => this.setState({ ...res }));
    }

    render() {
        const { image } = this.state;
        return (
            <div
                className="Wrapper"
                style={{ backgroundImage: `url(${image})` }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Wrapper;
