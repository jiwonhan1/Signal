import axios from 'axios';
import * as actions from './actions';
import Geolocation from '@react-native-community/geolocation';

export function fetchAreas() {
  return dispatch => {
    dispatch(actions.fetchDataBegin());
    axios.get('https://phm16m4tck.execute-api.us-west-2.amazonaws.com/Prod/api/signalspots')
    .then(response => {dispatch(actions.fetchData(response));
    })
    .catch(error => {dispatch(actions.fetchDataFailure(error))
    })
  }
}

export function currentLocation() {
return dispatch => {
  Geolocation.getCurrentPosition(position => {
    {dispatch(actions.fetchLocation(position))}
    ;
  }),
  (error) => {
    alert("Geolocation error: "+ error.message);
},
{enableHighAccuracy: true, timeout: 20000, maximumAge: 0}
}}