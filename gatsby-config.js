module.exports = {
  siteMetadata: {
    title: `Game of Thrones Episodes Gatsby`,
    description: `End assignment TDD-and-CI-CD-with-Github-Actions course`
  },
  plugins: [`gatsby-transformer-json`, {resolve: `gatsby-source-filesystem`, options: {path: `./src/data/`}}],
};
