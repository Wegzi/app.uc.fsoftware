export const initialState = {
  user: undefined,
  hierarch: [],
  rules: {
    create_users: false,
    read_users: false,
    update_user: false,
    delete_user: false,
    create_services: false,
    update_services: false,
    delete_services: false,
  },
};

export default function stateReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_HIERARCH':
      return { ...state, hierarch: action.payload };
    case 'SET_RULES':
      return { ...state, rules: { ...state.rules, ...action.payload } };
    default:
      return state;
  }
}
