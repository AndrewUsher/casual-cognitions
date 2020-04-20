import React, { useLayoutEffect, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import styled, { ThemeProvider } from 'styled-components'
import { Code } from './code'
import { GlobalStyles } from './GlobalStyles'

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

const toggleBackgroundColor = {
  dark: '#88e1f2',
  light: '#f78259'
}

const ToggleButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 12px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  background-color: ${props => toggleBackgroundColor[props.theme.currentTheme]};
`

const AppWrapper = ({ element }) => {
  const [theme, setTheme] = useState('light')
  const buttonIcon = theme === 'light' ? '🌑' : '☀️'

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

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
    currentTheme: theme
  }

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyles />
      <MDXProvider components={components}>{element}</MDXProvider>
      <ToggleButton onClick={toggleTheme}>{buttonIcon}</ToggleButton>
    </ThemeProvider>
  )
}

export { AppWrapper }
