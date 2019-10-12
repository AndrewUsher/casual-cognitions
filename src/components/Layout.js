import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props

    let header

    if (location.pathname === '/') {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
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
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1)
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
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
          }}
        >
          {header}
          {children}
        </div>
      </Fragment>
    )
  }
}

export default Layout
