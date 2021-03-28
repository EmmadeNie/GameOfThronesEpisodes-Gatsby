import React from "react"
import {getEpisodeData} from "../utils/getDataFunctions";
import PrevNextLinks from "../Components/PrevNextLinks";


const EpisodePage = ({pageContext})=> {
    console.log(getEpisodeData(pageContext.id))
    return<div>{pageContext.name} = {pageContext.id}<PrevNextLinks episodeId={pageContext.id}/></div>
}

export default EpisodePage