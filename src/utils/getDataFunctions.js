import gameOfThrones from "../data/gameOfThrones.json";

const getGameOfThronesData = ()=> {
    console.log(gameOfThrones.gameOfThrones.episodes)
}

const getEpisodesPerSeason = (season)=> gameOfThrones.gameOfThrones.episodes.filter(episode=> episode.season === season)
const getEpisodeData = (episodeId)=> gameOfThrones.gameOfThrones.episodes.find(episode=> episode.id === episodeId)
const getNextEpisode = episodeId => null
const getPrevEpisode = episodeId => null

export {getGameOfThronesData, getEpisodesPerSeason, getEpisodeData, getNextEpisode, getPrevEpisode}

