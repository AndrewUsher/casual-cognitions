import React, { useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import { ThemeProvider } from 'styled-components'
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
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  const styledTheme = {
    currentTheme: theme,
    utils: {
      setTheme: toggleTheme
    }
  }

  return (
    <ThemeProvider theme={styledTheme}>
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  )
}

export { AppWrapper }
