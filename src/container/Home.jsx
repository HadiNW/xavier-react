import React, { Component } from 'react';
import axios from 'axios';
import Button from '../components/Button'
import {connect} from 'react-redux'
import {login, logout, toggle} from '../actions/loginActions'

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
        {/* {JSON.stringify(this.state.heroes)} */}
        <input style={inputStyle} placeholder="new todo" value={newTodo} onChange={(e) => this.handleChange(e)}></input><br/>
        <Button fn={this.addNewTodo} title={'add new todo'}/>
        {/* <Button fn={this.props.toggle} title={'toggle login'}/>*/}
        <button onClick={() => this.props.toggle(this.props.isLogin)}>toggle login</button>
        {!this.props.isLogin?
        <Button fn={this.props.login} title={'login'} /> :
        <Button fn={this.props.logout} title={'logout'} />}
        <h2>{this.props.isLogin ? 'kamu sudah login' : 'kamu belom login'}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin
  }
}

const tributeToPakRyan = (dispatch) => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    toggle: (prev) => dispatch(toggle(prev)) 
  }
}

export default connect(mapStateToProps, tributeToPakRyan)(Home);
