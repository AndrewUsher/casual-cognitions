/* @jsx jsx */
import { Fragment } from 'react'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, jsx, Themed } from 'theme-ui'

const Layout = ({ children, title }) => {
  const location = useLocation()
  let header

  if (location.pathname === '/' || location.pathname === '/archive' || location.pathname.match(/^\/blog\/?$/)) {
    header = (
      <Themed.h1
        sx={{
          marginY: 3
        }}
      >
        <Link
          sx={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit'
          }}
          to="/blog"
        >
          {title}
        </Link>
      </Themed.h1>
    )
  } else {
    header = (
      <Themed.h2
        as="h2"
        sx={{
          marginY: 3
        }}
      >
        <Link
          as={Link}
          sx={{
            textDecoration: 'none',
            color: 'inherit'
          }}
          to={'/blog'}
        >
          {title}
        </Link>
      </Themed.h2>
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
