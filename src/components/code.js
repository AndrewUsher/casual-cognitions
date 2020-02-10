import React from 'react'
import loadable from '@loadable/component'
import Highlight, { defaultProps } from 'prism-react-renderer'

export const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    const LoadedLiveProvider = loadable(async () => {
      const { LiveProvider } = await import('react-live')
      return props => <LiveProvider {...props} />
    })

    const LoadedLiveEditor = loadable(async () => {
      const { LiveEditor } = await import('react-live')
      return props => <LiveEditor {...props} />
    })

    const LoadedLiveError = loadable(async () => {
      const { LiveError } = await import('react-live')
      return props => <LiveError {...props} />
    })

    const LoadedLivePreview = loadable(async () => {
      const { LivePreview } = await import('react-live')
      return props => <LivePreview {...props} />
    })
    return (
      <LoadedLiveProvider code={codeString} noInline={true}>
        <LoadedLiveEditor />
        <LoadedLiveError />
        <LoadedLivePreview />
      </LoadedLiveProvider>
    )
  } else {
    return (
      <Highlight {...defaultProps} code={codeString} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, borderRadius: '4px', padding: '1rem' }}>
            {tokens.map((line, key) => (
              <div key={key} {...getLineProps({ line, key })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}
