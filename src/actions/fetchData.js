import axios from 'axios';
import * as actions from './actions';

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
