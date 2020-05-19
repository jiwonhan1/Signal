export const FETCH_DATA_BIGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_LOCATION = 'FETCH_LOCATION';
export const MOVE_TO_LOCATION = 'MOVE_TO_LOCATION';

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

export const fetchLocation = () => ({
  type: FETCH_LOCATION,
})

export const moveToLocation = (geolocation) => ({
  type: MOVE_TO_LOCATION,
  geolocation
})