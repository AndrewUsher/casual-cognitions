const path = require('path')

const BLOG_POSTS_QUERY = `
{
  allMdx(
    filter: { fileAbsolutePath: { regex: "/blog/" } }
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 1000
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
        }
        body
      }
    }
  }
}
`

const createBlogPostPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blog-post.js')
  const result = await graphql(
    BLOG_POSTS_QUERY
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })
  })
}

module.exports = {
  createBlogPostPages
}
