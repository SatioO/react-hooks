import { GET_BOOKS } from "../constants"

export const fetchBooks = async (dispatch) => {
  dispatch({ type: `${GET_BOOKS}_REQUEST`})

  try {
    const response = await (await fetch("https://dev.authorify.com/book")).json()
    dispatch({ type: GET_BOOKS, books: response})
  } catch(error) {
    dispatch({ type: `${GET_BOOKS}_FAILURE`, error })
  }
}
