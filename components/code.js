import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

export const Code = ({ codeString, language, ...props }) => {
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
