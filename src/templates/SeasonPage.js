import React from "react"
import {getEpisodesPerSeason} from "../utils/getDataFunctions";
import generateEpisodeLink from "../utils/generateLinks";


const SeasonPage = ({pageContext})=> {

  const getLinks = ()=>
      getEpisodesPerSeason(pageContext.season).map(episode=>generateEpisodeLink(episode) )

    return<div><h1>{pageContext.season}</h1><ul>{getLinks()}
    </ul></div>
}

export default SeasonPage