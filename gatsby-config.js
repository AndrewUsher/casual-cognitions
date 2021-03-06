module.exports = {
  siteMetadata: {
    title: 'Casual Cognitions',
    author: 'Andrew Usher',
    social: {
      twitter: 'andrewusher17'
    },
    socialLinks: {
      email: 'mailto:andrewusher00@gmail.com',
      github: 'https://github.com/AndrewUsher',
      twitter: 'https://twitter.com/andrewusher17',
      youtube: 'https://www.youtube.com/user/andrewusher00'
    }
  },
  polyfill: false,
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },

          {
            resolve: 'gatsby-remark-smartypants'
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Casual Cognitions',
        short_name: 'Casual Cognitions',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet'
  ]

}
