import axios from 'axios';

export const FETCH_STASHES_START = 'FETCH_STASHES_START';
export const FETCH_STASHES_SUCCESS = 'FETCH_STASHES_SUCCESS';
export const FETCH_STASHES_FAIL = 'FETCH_STASHES_FAIL';

export const getStashes = () => dispatch => {
  dispatch({type: FETCH_STASHES_START});
  axios
    .get('http://api.pathofexile.com/public-stash-tabs?callback=foo')
    .then(res => 
      dispatch ({type: FETCH_STASHES_SUCCESS, payload: res.data.stashes})
      )
    .catch(err => dispatch({type: FETCH_STASHES_FAIL, payload: err}))

}