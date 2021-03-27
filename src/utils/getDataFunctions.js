import gameOfThrones from "../data/gameOfThrones.json";

const getGameOfThronesData = ()=> {
    console.log(gameOfThrones.gameOfThrones.episodes)
}

export const getEpisodesPerSeason = (season)=> {
const filteredEpisodes = gameOfThrones.gameOfThrones.episodes.filter(episode=> episode.season === season)
    return filteredEpisodes
}

export default getGameOfThronesData