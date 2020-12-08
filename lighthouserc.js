module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'first-contentful-paint': [
          'error',
          { maxNumericValue: 2000, aggregationMethod: 'optimistic' }
        ],
        interactive: ['error', { maxNumericValue: 5000, aggregationMethod: 'optimistic' }],
        'legacy-javascript': 'off',
        // Turned off until https://github.com/gatsbyjs/gatsby/issues/16097 is resolved
        'errors-in-console': 'off'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
