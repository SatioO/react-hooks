import React, { memo } from "react"

export default memo(function Book(props) {
  return <p>{props.name}</p>
})