module.exports = {
  siteMetadata: {
    title: "salon",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`, `gatsby-remark-images-zoom`],
      },
    },
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
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: "http://beauty-salon.local/graphql",
        protocol: "http",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        auth: {
        
          htaccess_user: "dawid",
          htaccess_pass: "Dawid1234",
          htaccess_sendImmediately: false,

          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "54793",
          wpcom_user: "gatsbyjswpexample@gmail.com",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,

          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        cookies: {},
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: ["**/posts/1456"],
        keepMediaSizes: false,
        normalizer: function ({ entities }) {
          return entities
        },
        normalizers: normalizers => [
          ...normalizers,
          {
            name: "nameOfTheFunction",
            normalizer: function ({ entities }) {
              return entities
            },
          },
        ],
      },
    },
  ],
};
