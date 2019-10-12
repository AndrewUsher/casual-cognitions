import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

const NotFoundPage = ({ location }) => console.log(location) || (
  <Layout location={location}>
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
}

export default NotFoundPage
