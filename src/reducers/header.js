const initialState = {
  data: [/*todo*/]
}
/*
 * SOLO PINTO HEADER 
 */
export default function twits (state = initialState, action) {

  switch(action.type) {
    // case 'ADD_TODO':
    //   return {
    //     ...state,   //Retorna una copia del state
    //     data: state.data.concat(action.payload),
    //   }
    // case 'DELETE_TODO':
    //   return {
    //     ...state,
    //     data: state.data.filter(x => x.id !== action.payload),
    //   }
    default:
      return state
  }
}
