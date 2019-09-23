module.exports = {
  siteMetadata: {
    title: `SecondLife Harvest`,
    description: `SecondLife Harvest, Inc. is a public charity aimed at eradicating Food Insecurity
by eliminating food waste derived from prepared un-served meals.`,
    author: `@mattshade`,
    menuLinks:[
      {
         name:'donate',
         link:'/donate'
      },
      {
         name:'about',
         link:'/about'
      },
      {
         name:'contact',
         link:'/contact'
      }
      ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/2l-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif']
        }
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App  Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
