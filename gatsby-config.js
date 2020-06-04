module.exports = {
  siteMetadata: {
    title: `rvaccaro.com.ar`,
    author: `Roberto Vaccaro`,
    description: `being digital!`,
    siteUrl: `https://rvaccaro.com.ar/`,
    social: {
      email: `roberto.vaccaro@gmail.com`,
      twitter: `robertitov13`,
      github: `robertito13`,
      stackoverflow: `4467281`,
      codingame: `e4636f05a4fc4d7afc87b2f8848e1a4e1703161`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
