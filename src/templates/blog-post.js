import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { TransitionLink } from '../components/TransitionLink'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet>
          <title>{post.frontmatter.title} | Casual Cognitions</title>
          <meta name="description" content={post.excerpt} />
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0
          }}
        >
          <li>
            {previous && (
              <TransitionLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </TransitionLink>
            )}
          </li>
          <li>
            {next && (
              <TransitionLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </TransitionLink>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
      excerpt(pruneLength: 100)
    }
  }
`
