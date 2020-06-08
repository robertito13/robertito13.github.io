module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Work Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
};
