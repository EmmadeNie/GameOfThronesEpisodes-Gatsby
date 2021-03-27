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
      }
    }
  }
}
`)
    const episodes = data.dataJson.gameOfThrones.episodes;
    episodes.forEach(episode=> actions.createPage({
        path: `/${episode.id}/`,
        component: require.resolve(`./src/templates/EpisodePage.js`),
        context: episode,
    }));
    [1,2,3,4,5,6,7,8,9,10].forEach(season=> actions.createPage({
        path: `/Season${season}/`,
        component: require.resolve(`./src/templates/SeasonPage.js`),
        context: {season},
    }))
};
