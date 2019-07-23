import { GET_BOOKS } from "../constants"

export default (state, action) => {
  switch(action.type) {
    case `${GET_BOOKS}_REQUEST`:
      return { ...state, loading: true }

    case GET_BOOKS:
      return { ...state, loading: false, loaded: true, data: action.books }
    
    case `${GET_BOOKS}_FAILURE`:
      return { ...state, loaded: true }

    default:
      return state
  }
}