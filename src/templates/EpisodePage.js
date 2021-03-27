import React from "react"

const EpisodePage = ({pageContext})=> {
    return<div>{pageContext.name} = {pageContext.id}</div>
}

export default EpisodePage