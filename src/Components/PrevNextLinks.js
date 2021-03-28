import React from "react"
import generateEpisodeLink from "../utils/generateLinks";
import {getEpisodeData, getNextEpisode, getPrevEpisode} from "../utils/getDataFunctions";


const PrevNextLinks = ({episodeId})=> {

    const getNextLink =()=> {
        if (getNextEpisode(episodeId)) {
            generateEpisodeLink(getEpisodeData(getNextEpisode(episodeId)))
        }
    }
    const getPrevLink =()=> {
        if (getPrevEpisode(episodeId)) {
            generateEpisodeLink(getEpisodeData(getPrevLink(episodeId)))
        }
    }

    return <div><ul>lala {getPrevLink()}{getNextLink()}</ul></div>
}

export default PrevNextLinks