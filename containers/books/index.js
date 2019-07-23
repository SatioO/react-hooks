import React, { useReducer, useEffect } from "react"
import { bookReducer } from "../../reducers"
import { GET_BOOKS } from "../../constants"
import { Book } from "../../components"
import { fetchBooks } from "../../utilities"

const initialState = { loading: false, loaded: false, data: []}

export default function Books() {
  const [books, dispatch] = useReducer(bookReducer, initialState)

  useEffect(() => {
    fetchBooks(dispatch)
  }, [])

  return (
    <>
       {!!books.loading && "Loading books ..."}
       {books.loaded && books.data.map((book, i) => <Book key={i} {...book}/>)}
    </>
  )
}