import React, { Component } from 'react';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);    
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>

        <div>
           afaf
        </div>
        
      </div>
    );
  }
}

export default Home;