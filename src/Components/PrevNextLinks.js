import React from "react"
import generateEpisodeLink, {generateNextLink, generatePrevLink} from "../utils/generateLinks";
import {getEpisodeData, getNextEpisode, getPrevEpisode} from "../utils/getDataFunctions";


const PrevNextLinks = ({episodeId})=> {

    const getNextLink =()=> {
        if (getNextEpisode(episodeId)) {
            return generateNextLink(getEpisodeData(getNextEpisode(episodeId)))
        }
    }
    const getPrevLink =()=> {
        if (getPrevEpisode(episodeId)) {
            return generatePrevLink(getEpisodeData(getPrevEpisode(episodeId)))
        }
    }

    return <div><ul>lalala {getPrevLink()}{getNextLink()}</ul></div>
}

export default PrevNextLinks