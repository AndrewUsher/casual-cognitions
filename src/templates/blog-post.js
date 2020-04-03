import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import { Comments } from '../components/Comments'
import { Layout } from '../components/Layout'
import { rhythm, scale } from '../utils/typography'

const Seperator = () => (
  <hr
    style={{
      marginBottom: rhythm(1)
    }}
  />
)

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet>
          <title>{post.frontmatter.title} | Casual Cognitions</title>
          <meta
            name="title"
            content={`${post.frontmatter.title} | ${siteTitle}`}
          />
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
        <Seperator />
        <Comments
          identifier={this.props.location.pathname}
          title={post.frontmatter.title}
        />
        <Seperator />
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
              <Link to={`post${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/post${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
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
