const path = require('path')

const POSTS_WITH_TAGS_QUERY = `
  {
    posts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`

const createBlogTagsPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const tagTemplate = path.resolve('src/templates/tags.js')

  const result = await graphql(POSTS_WITH_TAGS_QUERY)

  if (result.errors) {
    throw result.errors
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/blog/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue
      }
    })
  })
}

module.exports = { createBlogTagsPages }
