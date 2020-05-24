import axios from 'axios';
import * as actions from './actions';

export function getAddress(lat , lng) {
  return dispatch => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyD0ageZQZv6e1Uc1uL5YMCIAStvgg2HEoQ`)
    .then(response => {dispatch(actions.addAddress(response))
    })
    .catch(error => console.log(error.message)) 
  }
}