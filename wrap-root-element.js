import React from 'react'
import { AppWrapper } from './src/components/AppWrapper'

export const wrapRootElement = ({ element }) => (
  <React.StrictMode>
    <React.Fragment>
      <AppWrapper element={element} />
    </React.Fragment>
  </React.StrictMode>
)
