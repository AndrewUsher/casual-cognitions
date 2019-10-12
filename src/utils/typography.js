import Typography from 'typography'
import ElkGen from 'typography-theme-elk-glen'

ElkGen.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none'
  },
  'h3 a, h1 a': {
    backgroundImage: 'none'
  },
  'h1 a:hover, h3 a:hover': {
    color: '#2d248a'
  }

})

const typography = new Typography(ElkGen)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
