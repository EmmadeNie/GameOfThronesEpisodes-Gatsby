import React from "react"
import {getEpisodeData} from "../utils/getDataFunctions";

const EpisodePage = ({pageContext})=> {
    console.log(getEpisodeData(pageContext.id))
    return<div>{pageContext.name} = {pageContext.id}</div>
}

export default EpisodePage