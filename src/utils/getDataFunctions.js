import gameOfThrones from "../data/gameOfThrones.json";


const getGameOfThronesData = ()=> {
    console.log(gameOfThrones.gameOfThrones.episodes)
}

export const getEpisodesPerSeason = (season)=> {
const filteredEpisodes = gameOfThrones.gameOfThrones.episodes.filter(episode=> episode.season === season)
    return filteredEpisodes
}

export const getEpisodeData = (episodeId)=> {
    return gameOfThrones.gameOfThrones.episodes.find(episode=> episode.id === episodeId)
}

export default getGameOfThronesData