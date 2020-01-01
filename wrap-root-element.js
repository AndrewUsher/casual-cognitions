import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from './src/components/code'
import { GlobalStyles } from './src/components/GlobalStyles'
import { preToCodeBlock } from 'mdx-utils'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  }
}
export const wrapRootElement = ({ element }) => (
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyles />
      <MDXProvider components={components}>{element}</MDXProvider>
    </React.Fragment>
  </React.StrictMode>
)
