/* @jsx jsx */
import { Fragment } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Heading, jsx } from 'theme-ui'

const Layout = ({ children, location, title }) => {
  let header

  if (location.pathname === '/' || location.pathname === '/archive' || location.pathname.match(/^\/blog\/?$/)) {
    header = (
      <Heading
        as="h1"
        sx={{
          marginY: 3
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit'
          }}
          to="/blog"
        >
          {title}
        </Link>
      </Heading>
    )
  } else {
    header = (
      <Heading
        as="h2"
        sx={{
          marginY: 3
        }}
      >
        <Link
          sx={{
            textDecoration: 'none',
            color: 'inherit'
          }}
          to={'/'}
        >
          {title}
        </Link>
      </Heading>
    )
  }
  return (
    <Fragment>
      <Helmet htmlAttributes={{ lang: 'en' }} title="Casual Cognitions" />
      <Box
        sx={{
          mx: 'auto',
          maxWidth: 'container',
          paddingX: 3
        }}
      >
        {header}
        {children}

      </Box>
    </Fragment>
  )
}

export { Layout }
