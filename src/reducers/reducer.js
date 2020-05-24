import * as actions from '../actions/actions';

const initialState = {
  loading: false,
  error: null,
  areas: [],
  address : [],
  currentLocation: {},
  lat: 0,
  lon : 0,
  latDelta: 0.0043,
  lonDelta: 0.0034
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
    case actions.CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.position.coords,
        lat: action.position.coords.latitude,
        lon: action.position.coords.longitude,
        latDelta: state.latDelta,
        lonDelta: state.lonDelta
      }
    case actions.CHANGE_LOCATION:
      return {
        ...state,
        lat: action.lat,
        lon: action.lon,
        latDelta: action.latDelta,
        lonDelta: action.lonDelta
      }
    case actions.ADD_ADDRESS:
      return {
        ...state,
        address: action.data.data.results[0].formatted_address,
      }
    default:
      return state;
  }
}

export default reducer;