import React from "react"

const EpisodePage = ({pageContext})=> {
    console.log(pageContext)
    return<div>{pageContext.name} = {pageContext.id}</div>
}

export default EpisodePage