import {
  FETCH_STASHES_START,
  FETCH_STASHES_SUCCESS,
  FETCH_STASHES_FAIL
} from "../actions/actions"

const initialState = {
  stashes: [],
  error: '',
  isFetching: false
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_STASHES_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_STASHES_SUCCESS:
      return {
        ...state,
        stashes:action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_STASHES_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer