import ACTION from '../actions/actionTypes';


const initialState = null;
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ACTION.GET_USER_TRANSACTIONS_SUCCESS: {
        return {
          ...state,
            data: action.data
        };
      }
      case ACTION.GET_USER_TRANSACTIONS_ERROR: {
        return { 
            ...state,
            error: action.error
        };
      }
      default:
        return state;
    }
  }
  