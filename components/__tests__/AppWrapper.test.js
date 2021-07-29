import React from 'react'
import { render } from '@testing-library/react'
import { Helmet } from 'react-helmet'
import { AppWrapper } from '../AppWrapper'

it('Properly renders element', () => {
  const element = 'Hello App'
  const { getByText, debug } = render(<AppWrapper element={element} />)
  expect(getByText(element)).toBeTruthy()
  debug()
})

it('Properly renders analytics tag', () => {
  render(<AppWrapper />)
  const helmet = Helmet.peek()
  const hasAnalyticsTag = helmet.scriptTags.some(script => script.src === 'https://drewster-umami.herokuapp.com/umami.js')
  expect(hasAnalyticsTag).toBe(true)
})
