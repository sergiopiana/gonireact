import fetch from 'cross-fetch';
// CONSTANTS
const FETCH_AUTOS_LIST = 'autos/FETCH_AUTOS_LIST';
//const FETCH_AUTOS_DETAIL = 'autos/FETCH_AUTOS_DETAIL';

// ACTIONS
export function fetchautosLista() {
  return dispatch =>
    fetch('/api/autos')
      .then(response => response.json())
      .then(json => dispatch(fetchautosListaSuccess(json)));
}

function fetchautosListaSuccess(json) {
 // console.log(json.results);
  return {
    type: FETCH_AUTOS_LIST,
    data: json.results,
  };
}


// REDUCERS


export default function reducer(state = [], action) {
  // const newState = { ...state };
  switch (action.type) {
    case FETCH_AUTOS_LIST:
      return action.data;
    default:
      return state;
  }
}
