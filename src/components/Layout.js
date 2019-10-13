import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { rhythm, scale } from '../utils/typography'
import { TransitionLink } from './TransitionLink'

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
          <TransitionLink
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={'/'}
          >
            {title}
          </TransitionLink>
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
          <TransitionLink
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={'/'}
          >
            {title}
          </TransitionLink>
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
