import React from "react"
import {getEpisodeData} from "../utils/getDataFunctions";
import PrevNextLinks from "../Components/PrevNextLinks";
import Layout from "../Components/Layout";
import InfoTag from "../Components/InfoTag";

const EpisodePage = ({pageContext})=> {
    console.log(getEpisodeData(pageContext.id))
    const episodeData = getEpisodeData(pageContext.id)
    return<Layout>
        <div className={"Episode--container"}>
             <div className={"Episode--image-container"}>
                <img className={"Episode--image"}  src={episodeData.image.medium} alt={episodeData.name}/>
            </div>
            <div className={"Episode--Info-container"}>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <InfoTag title={"Name"} content={episodeData.name}/>
                <InfoTag title={"Season"} content={episodeData.season}/>
                <InfoTag title={"Number"} content={episodeData.number}/>
                <InfoTag title={"Air time"} content={episodeData.airtime}/>
                <InfoTag title={"Air Date"} content={episodeData.airdate}/>
            </div>
                <div style={{display: "inline-flex", borderLeft: "1px solid white", padding: 5, margin: 5}}><span>{episodeData.summary}</span></div>
                <PrevNextLinks episodeId={pageContext.id}/>
            </div>
        </div>
    </Layout>
}

export default EpisodePage