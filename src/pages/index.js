/* @jsx jsx */
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Box, Flex, Heading, jsx, Paragraph, Text } from 'theme-ui'
import { FaGithub, FaRegEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa'

import { SocialIcon } from '../components/SocialIcon'

const styles = {
  introWrapper: {
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: [4, 4]
  },
  icons: {
    marginBottom: 4,
    marginTop: 4,
    '> a': {
      marginRight: '20px'
    }
  },
  intro: {
    maxWidth: 500
  },
  introHeading: {
    fontSize: 32,
    marginBottom: 40
  },
  paragraph: {
    fontSize: 3,
    marginY: 3
  },
  publishInfo: {
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 4
  },
  subheading: {
    fontSize: 24,
    marginBottom: 8
  },
  postTitle: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

const IndexPage = () => {
  const { allMdx: { nodes: recentPosts }, site: { siteMetadata: { socialLinks } } } = useStaticQuery(graphql`
    {
      allMdx(
        sort: {order: DESC, fields: frontmatter___date}
        limit: 5
        filter: {fileAbsolutePath: {regex: "/content/blog/"}}
      ) {
        nodes {
          frontmatter {
            date(fromNow: true)
            title
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250, truncate: true)
        }
      }
      site {
        siteMetadata {
          socialLinks {
            email
            github
            twitter
            youtube
          }
        }
      }
    }
  `)

  console.log(recentPosts)

  return (
    <Fragment>
      <Helmet>
        <title>Andrew Usher</title>
        <meta name="description" content="Portfolio/blog for Andrew Usher" />
      </Helmet>
      <Flex sx={styles.introWrapper}>
        <Box css={styles.intro}>
          <Heading as="h1">Andrew Usher</Heading>
          <Text sx={styles.paragraph} as="p">
          Howdy! During the day, I am a systems engineer at AutoZone Inc, primarily leading a small team of React developers on the B2C web application.
          </Text>
          <Text sx={styles.paragraph} as="p">
          During my free time, I like dabbling around with new front end technologies by creating my own projects. When I&apos;m not coding, I like to play basketball and ride my bike throughout downtown Memphis.
          </Text>
          <Flex sx={styles.icons}>
            <SocialIcon to={socialLinks.github} Icon={FaGithub} />
            <SocialIcon to={socialLinks.email} Icon={FaRegEnvelope} />
            <SocialIcon to={socialLinks.twitter} Icon={FaTwitter} />
            <SocialIcon to={socialLinks.youtube} Icon={FaYoutube} />
          </Flex>
          <Heading as="h2" css={styles.introHeading}>Recent Posts</Heading>
          {recentPosts.map(post => (
            <div key={post.frontmatter.title}>
              <Link href={`/blog${post.fields.slug}`} sx={styles.postTitle}>
                <Heading as="h3" css={styles.subheading}>{post.frontmatter.title}</Heading>
              </Link>
              <Paragraph as="p">{post.excerpt}</Paragraph>
              <Paragraph css={styles.publishInfo}>Published {post.frontmatter.date}</Paragraph>
            </div>
          ))}
          <Heading as="h2" css={styles.introHeading}>Projects</Heading>
        </Box>
      </Flex>
    </Fragment>
  )
}

export default IndexPage
