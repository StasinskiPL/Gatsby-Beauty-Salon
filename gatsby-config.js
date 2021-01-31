module.exports = {
  siteMetadata: {
    title: "salon",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: "",
    //     spaceId: "",
    //   },
    // },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
