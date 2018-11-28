import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchApi} from '../actions/fetchApi'

class About extends Component {  
  componentDidMount = () => {
    // console.log(this.props)
    this.props.fetchApi()
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.login && 'Ini About Lho! - ' +this.props.match.params.name}</h1>
        <h2>Ini dari props biasa {this.props.dev}</h2>
        {this.props.error && <h1>fetch api error</h1>}
        {this.props.loading? <img src="https://i.gifer.com/1amw.gif" /> : <h3>{JSON.stringify(this.props.hero)}</h3> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.isLogin,
    hero: state.api,
    loading: state.api.loading,
    error: state.api.error
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => {dispatch(fetchApi())}
})


export default connect(mapStateToProps, mapDispatchToProps)(About);
