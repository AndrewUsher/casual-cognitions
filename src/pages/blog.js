/** @jsx jsx */
import React from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Heading, Input, jsx, Text } from 'theme-ui'
import { Bio } from '../components/Bio'
import { Layout } from '../components/Layout'

const inputStyles = {
  border: 'none',
  borderBottom: '1px solid #000',
  px: 0,
  '&:focus': {
    outline: 'none'
  }
}

const BlogIndex = props => {
  const [search, setSearch] = React.useState('')
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  const handleChange = e => {
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <Bio />
      <Input
        id="search-posts"
        type="text"
        onChange={handleChange}
        placeholder="Search for a post"
        sx={inputStyles}
      />
      {posts.filter(({ node }) => node.frontmatter.title.toLowerCase().includes(search)).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const postPublished = node.frontmatter.published !== 'false'
        if (!postPublished) return null
        return (
          <Box key={node.fields.slug} my={30}>
            <Heading as="h3">
              <Link
                sx={{
                  color: 'inherit',
                  textDecoration: 'none'
                }}
                to={`/blog${node.fields.slug}`}
              >
                {title}
              </Link>
            </Heading>
            <small>{node.frontmatter.date}</small>
            <Text
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
            <Link
              sx={{
                color: 'inherit'
              }}
              to={`/blog${node.fields.slug}`}
            >
              Read More
            </Link>
          </Box>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            published
            title
          }
        }
      }
    }
  }
`
