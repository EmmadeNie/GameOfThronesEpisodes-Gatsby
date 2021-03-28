import React from "react"
import {getEpisodesPerSeason} from "../utils/getDataFunctions";
import generateEpisodeLink from "../utils/generateLinks";
import Layout from "../Components/Layout";


const SeasonPage = ({pageContext})=> {

  const getLinks = ()=>
      getEpisodesPerSeason(pageContext.season).map(episode=>generateEpisodeLink(episode) )

    return<Layout><div style={{transform: "translate(-50,0)"}}><h1>Season {pageContext.season}</h1><ul>{getLinks()}
    </ul></div></Layout>
}

export default SeasonPage