export const FETCH_DATA_BIGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

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