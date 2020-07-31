/* @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Flex, jsx, Text } from 'theme-ui'

const styles = {
  bioContainer: {
    alignItems: 'center'
  },
  bioImage: {
    marginRight: 3,
    minWidth: '60px'
  },
  bioText: {
    fontSize: 2
  }
}

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
    <Flex sx={styles.bioContainer}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        sx={styles.bioImage}
      />
      <Text as="p" sx={styles.bioText}>
        Written by <strong>{author}</strong> who lives and works in
        Memphis building awesome reactive applications.
        {' '}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </Text>
    </Flex>
  )
}
