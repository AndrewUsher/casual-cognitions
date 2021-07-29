/* @jsx jsx */
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex, Heading, jsx, Text } from 'theme-ui'
import { FaGithub, FaRegEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SocialIcon } from '../components/SocialIcon'

const styles = {
  introWrapper: {
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: ['flex-start', 'center', 'center'],
    padding: [4, 0, 0]
  },
  icons: {
    '> a': {
      marginRight: '12px'
    }
  },
  intro: {
    maxWidth: 500
  },
  paragraph: {
    fontSize: 2,
    marginY: 3
  }
}

const IndexPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Andrew Usher</title>
        <meta name="description" content="Portfolio/blog for Andrew Usher" />
      </Helmet>
      <Flex sx={styles.introWrapper}>
        <Box css={styles.intro}>
          <Heading as="h2">Andrew Usher</Heading>
          <Text sx={styles.paragraph} as="p">
          Howdy! During the day, I am a systems engineer at AutoZone Inc, primarily leading a small team of React developers on the B2C web application.
          </Text>
          <Text sx={styles.paragraph} as="p">
          During my free time, I like dabbling around with new front end technologies by creating my own projects. When I&apos;m not coding, I like to play basketball and ride my bike throughout downtown Memphis.
          </Text>
          <Flex sx={styles.icons}>
            <SocialIcon to="https://github.com/AndrewUsher" Icon={FaGithub} />
            <SocialIcon to="mailto:andrewusher00@gmail.com" Icon={FaRegEnvelope} />
            <SocialIcon to="https://twitter.com/andrewusher17" Icon={FaTwitter} />
            <SocialIcon to="https://www.youtube.com/user/andrewusher00" Icon={FaYoutube} />
          </Flex>
        </Box>
      </Flex>
    </Fragment>
  )
}

export default IndexPage
