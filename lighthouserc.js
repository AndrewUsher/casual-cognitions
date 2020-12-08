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
        'uses-legacy-javascript': 'off'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
