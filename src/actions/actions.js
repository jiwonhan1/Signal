export const FETCH_DATA_BIGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_LOCATION = 'FETCH_LOCATION';
export const CURRENT_LOCATION = 'CURRENT_LOCATION';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const CREATE_AREA = 'CREATE_AREA';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BIGIN
})

export const fetchData = (data) => ({
  type: FETCH_DATA,
  payload: data
})

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  error
})

export const fetchLocation = (position) => ({
  type: CURRENT_LOCATION,
  position
})

export const changeLocation = (lat, lon, latDelta, lonDelta) => ({
  type: CHANGE_LOCATION,
  lat,
  lon,
  latDelta,
  lonDelta,
})

export const addAddress = (data) => ({
  type: ADD_ADDRESS,
  data
})

export const createArea = (area) => ({
  type: CREATE_AREA,
  area
})