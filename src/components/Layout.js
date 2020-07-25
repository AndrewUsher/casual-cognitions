import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Heading } from 'theme-ui'

const Layout = ({ children, location, title }) => {
  let header

  if (location.pathname === '/' || location.pathname === '/archive' || location.pathname === '/blog') {
    header = (
      <Heading
        as="h1"
        sx={{
          marginTop: 0
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
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit'
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Fragment>
      <Helmet htmlAttributes={{ lang: 'en' }} title="Casual Cognitions" />
      <Box
        sx={{
          mx: 'auto',
          maxWidth: 'container'
        }}
      >
        {header}
        {children}

      </Box>
    </Fragment>
  )
}

export { Layout }
