import React from 'react'
import { Helmet } from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import { Code } from './code'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  }
}

const AppWrapper = ({ element }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://drewster-umami.herokuapp.com" />
        <script async defer data-website-id="c809e2a0-6f33-40fc-82ec-8fb737633bda" src="https://drewster-umami.herokuapp.com/umami.js"></script>
      </Helmet>
      <MDXProvider components={components}>{element}</MDXProvider>
    </>
  )
}

export { AppWrapper }
