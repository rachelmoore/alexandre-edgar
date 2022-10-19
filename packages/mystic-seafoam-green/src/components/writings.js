import React from "react"
import { connect } from "frontity"
import List from "./list"

const Writings = ({ state }) => {
    const data = state.source.get("/")
  
    return (
        <List />
    )
  }
  
  export default connect(Writings)
