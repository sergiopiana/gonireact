// CONSTANTS
const LOGIN_STATUS = 'auth/LOGIN_STATUS';
const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

// ACTIONS


export const fetchAuth = (user, pass) => ({
  //if(user == 'kymed' && pass == 'kymed'){  

    type: LOGIN,   

  //}
})

// REDUCERS
export default function reducer(state = [], action) {
  // const newState = { ...state };
  switch (action.type) {
    case LOGIN:
      return {user: 'sergiopiana', nombre: 'Sergio', apellido: 'Piana'}
    default:
      return state;
  }
}
