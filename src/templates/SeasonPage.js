import React from "react"
import {Link} from "gatsby";
import {getEpisodesPerSeason} from "../utils/getDataFunctions";


const SeasonPage = ({pageContext})=> {
   const generateEpisodeLink = ( episode ) =>
        <li key={episode.id} className="day_link">
            <Link to={`/Season${episode.season}/${episode.id}/`}>
                Episode {episode.number} - {episode.name}
            </Link>
        </li>

  const getLinks = ()=>
      getEpisodesPerSeason(pageContext.season).map(episode=>generateEpisodeLink(episode) )



    return<div><h1>{pageContext.season}</h1><ul>{getLinks()}
    </ul></div>
}

export default SeasonPage