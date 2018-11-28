import axios from 'axios';

export function fetchApi () {
  return (dispatch) => {
    dispatch({type: 'FETCH_API_LOADING'})
    axios.get('https://api.opendota.com/api/heroStats')
      .then(({data}) => {
        dispatch({type: 'FETCH_API_SUCCESS', payload: data[33] })
      })
      .catch(err => {
        dispatch({type: 'FETCH_API_ERROR'})
      })
  }
} 