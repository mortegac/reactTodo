const initialState = {
  data: [/*todo*/]
}
/**
 * todo = {
 *   id: String
 *   todo: String
 *   estado: boolean
 * }
 */
export default function twits (state = initialState, action) {

  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: state.data.concat(action.payload),
      }
    case 'DELETE_TODO':
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.payload),
      }
    // case 'INCREASE_COUNTER':
    //   return {
    //     ...state,
    //     data: state.data.map(x => x.id == action.payload ? {
    //       ...x,
    //       counter: x.counter + 1,
    //     } : x)
    //   }
    default:
      return state
  }
}
