import axios from 'axios';
import * as actions from './actions';
import API_KEY from '../env/env';

export function getAddress(lat , lng) {
  return dispatch => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`)
    .then(response => {dispatch(actions.addAddress(response))
    })
    .catch(error => console.log(error.message)) 
  }
}