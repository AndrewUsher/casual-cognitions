const { createFilePath } = require('gatsby-source-filesystem')
const { createBlogPostPages } = require('./gatsby/node/createBlogPostPages')

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages({ actions, graphql })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
