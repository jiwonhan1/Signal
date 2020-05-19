import * as actions from '../actions/actions';

const initialState = {
  loading: false,
  error: null,
  areas: [],
  geolocation: {
    lat: 47.608166,
    lng: -122.204566, 
  }
}

function reducer (state = initialState, action){
  switch(action.type){
    case actions.FETCH_DATA_BIGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.FETCH_DATA:
      return {
        ...state, 
        loading: false,
        areas: action.payload.data,
      }
    case actions.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    case actions.FETCH_LOCATION:
      return {
        ...state,
        geolocation: geolocation,
      }
    case actions.MOVE_TO_LOCATION:
      return {
        ...state,
        geolocation: geolocation,
      }
    default:
      return state;
  }
}

export default reducer;