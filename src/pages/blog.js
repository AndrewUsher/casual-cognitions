/** @jsx jsx */
import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
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

const postTagStyles = {
  display: 'inline-block',
  backgroundColor: '#172774',
  borderRadius: '4px',
  color: '#fff',
  mt: 2,
  mr: 3,
  px: 3,
  py: 1
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
    <Layout title={siteTitle}>
      <Helmet meta={{ description: 'Search Casual Cognitions blog posts' }}/>
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

        return (
          <Box key={node.fields.slug} my={30}>
            <Heading as="h2">
              <Link
                sx={{
                  py: 12,
                  color: 'inherit',
                  textDecoration: 'none'
                }}
                to={`/blog${node.fields.slug}`}
              >
                {title}
              </Link>
            </Heading>
            <small>{node.frontmatter.date}</small>
            <Box>
              {node.frontmatter.tags.map(tag => (
                <span sx={postTagStyles} key={tag}>{tag}</span>
              ))}
            </Box>
            <Text
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
              sx={{
                marginY: 2
              }}
              as="p"
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
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {fileAbsolutePath: {regex: "/content/blog/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
