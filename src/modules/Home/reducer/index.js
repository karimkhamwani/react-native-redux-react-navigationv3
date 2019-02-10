import { SET_ACTIVITY_TAB_REQUEST } from '../actions/actionType';


export default (state = { darkMode: false, schedule: { enabled: false } }, action) => {
  switch (action.type) {
    case SET_ACTIVITY_TAB_REQUEST[1]:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};
