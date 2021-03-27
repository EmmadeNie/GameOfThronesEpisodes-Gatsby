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
    }))

};
