import { SET_ACTIVITY_TAB_REQUEST } from './actionType';

export const NON_API_REQUEST = tab => ({
  type: SET_ACTIVITY_TAB_REQUEST,
  payload: {
    client: 'default',
    request: {
      url: '/',
      method: 'get',
    },
  },
});


export const getPlaceHolderList = tab => dispatch => dispatch({
  types: SET_ACTIVITY_TAB_REQUEST,
  payload: {
    client: 'default',
    request: {
      url: '/',
      method: 'get',
    },
  },
});
