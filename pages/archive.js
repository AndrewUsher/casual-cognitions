import React from 'react'
import { Layout } from '../components/Layout'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Archive = () => {
  const { allMdx: { edges: posts } } = useStaticQuery(graphql`
    query ArchiveQuery {
      allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout title="Casual Cognitions">
      <h1>Archive</h1>
      <ul>
        {posts.map(({ node: { fields: { slug }, frontmatter: { title } } }) => (
          <React.Fragment key={title}>
            <li>
              <Link to={`/post${slug}`}>
                {title}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </Layout>
  )
}

export default Archive
