import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const Container = styled.div`
  display: flex;
  margin-bottom: ${rhythm(1.5)};

  @media screen and (max-width: 719px) {
    display: none;
  }
`

const BioImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 60px;
  border-radius: 100%;
`

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <Container>
      <BioImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in
        Memphis building awesome reactive applications.
        {' '}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </Container>
  )
}
