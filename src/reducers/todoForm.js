const initialState = {
  todo: ''
}

export default function todoForm (state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_TODO':
      return {
        ...state,
        todo: action.payload,
      }
    default:
      return state
  }
}
