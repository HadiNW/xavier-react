import React, { Component } from 'react';
import axios from 'axios';
import Button from '../components/Button'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      list: ['bangun', 'mandi'],
      newTodo: 'xavier',
      heroes: []
    }
  }

  componentDidMount = () => {
    axios.get('https://api.opendota.com/api/heroStats')
     .then(({data}) => {
       this.setState({
         heroes: data
       })
     })
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  addNewTodo = () => {
    this.setState({
      list: [...this.state.list, this.state.newTodo],
      newTodo: ''
    })
  }

  render() {
    const inputStyle= {
        borderRadius: 10,
        height: 20,
        width: 200,
    }
    const {list, newTodo} = this.state
    return (
      <div>
        <ul>
        {list.map(each =>{ 
          return <li>{each}</li>
        })}       
        </ul>
        {JSON.stringify(this.state.heroes)}
        <input style={inputStyle} placeholder="new todo" value={newTodo} onChange={(e) => this.handleChange(e)}></input><br/>
        <Button add={this.addNewTodo}/>
      </div>
    );
  }
}

export default Home;
