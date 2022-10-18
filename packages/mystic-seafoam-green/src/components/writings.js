import React from "react"
import List from "./list"

const Writings = ({ state }) => {
    const data = state.source.get(state.router.link)
  
    return (
    <>
        <List when={data.isArchive} />
    </>
    )
  }
  
  export default Writings
