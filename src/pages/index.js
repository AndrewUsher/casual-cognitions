import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { TransitionLink } from '../components/TransitionLink'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  padding-bottom: 4px;
  width: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.9);
    font-family: 'PT Sans', sans-serif;
  }

  &:focus {
    outline: none;
  }
`

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
      <SearchInput type="text" onChange={handleChange} placeholder="Search for a post" />
      {posts.filter(({ node }) => node.frontmatter.title.toLowerCase().includes(search)).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const postPublished = node.frontmatter.published !== 'false'
        if (!postPublished) return null
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4)
              }}
            >
              <TransitionLink
                style={{ boxShadow: 'none' }}
                to={node.fields.slug}
              >
                {title}
              </TransitionLink>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
              style={{ marginBottom: rhythm(1 / 4) }}
            />
            <TransitionLink to={node.fields.slug}>Read More</TransitionLink>
          </div>
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
