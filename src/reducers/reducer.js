import * as actions from '../actions/actions';

const initialState = {
  loading: false,
  error: null,
  areas: [],
  geolocation: {}
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
        geolocation: action.position.coords,
      }
    default:
      return state;
  }
}

export default reducer;