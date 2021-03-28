exports.createPages = async ({ actions, graphql }) => {
    const {data} = await graphql(`
 {
    site {
    siteMetadata {
      description
      title
    }
  }
dataJson {
    gameOfThrones {
      episodes {
        id
        name
        season
      }
    }
  }
}
`)
    const episodes = data.dataJson.gameOfThrones.episodes;
    console.log(episodes.map(ep=> ep.season))
    episodes.forEach(episode=> actions.createPage({
        path: `/Season${episode.season}/${episode.id}/`,
        component: require.resolve(`./src/templates/EpisodePage.js`),
        context: episode,
    }));
    [1,2,3,4,5,6,7,8].forEach(season=> actions.createPage({
        path: `/Season${season}/`,
        component: require.resolve(`./src/templates/SeasonPage.js`),
        context: {season},
    }));
};
