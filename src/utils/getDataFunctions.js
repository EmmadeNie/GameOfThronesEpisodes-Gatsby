import gameOfThrones from "../data/gameOfThrones.json";

const getAllEpisodes = ()=> gameOfThrones.gameOfThrones.episodes
const getEpisodesPerSeason = (season)=> gameOfThrones.gameOfThrones.episodes.filter(episode=> episode.season === season)
const getEpisodeData = (episodeId)=> gameOfThrones.gameOfThrones.episodes.find(episode=> episode.id === episodeId)
const getPrevEpisode = (episodeId) => {
    const episodeData = getEpisodeData(episodeId);
    if (episodeData.number === 1){return null}else{
        const season = episodeData.season
        const numberPrevEpisode = episodeData.number -1
        return getAllEpisodes().find(episode => episode.season === season && episode.number === numberPrevEpisode).id
    }
}

const getNextEpisode = episodeId => {
    const episodeData = getEpisodeData(episodeId);
    const season = episodeData.season
    const numberNextEpisode = episodeData.number +1
const nextEpisodeInSeason = getAllEpisodes().find(episode => episode.season === season && episode.number === numberNextEpisode)?.id
    if(nextEpisodeInSeason) {return nextEpisodeInSeason} else {return null}
}

export {getAllEpisodes, getEpisodesPerSeason, getEpisodeData,getPrevEpisode, getNextEpisode}

