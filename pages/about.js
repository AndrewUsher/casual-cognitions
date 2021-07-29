import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from '../components/Layout'

const query = graphql`
  query AboutQuery {
    allMdx(filter: {fileAbsolutePath: {regex: "/about/"}}) {
      edges {
        node {
          body
        }
      }
    }
  }
`

const AboutPage = () => {
  const data = useStaticQuery(query)
  const { body } = data.allMdx.edges[0].node
  return (
    <Layout title="Andrew Usher">
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default AboutPage
