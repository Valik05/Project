
const login = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        state: []
      };
      default: return state
    }

};

export default login
