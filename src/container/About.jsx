import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount = () => {
    console.log(this.props)
  }
  
  render() {
    return (
      <div>
        <h1>Ini About Lho! - {this.props.match.params.name}</h1>
        <h2>Ini dari props biasa {this.props.dev}</h2>
      </div>
    );
  }
}

export default About;
