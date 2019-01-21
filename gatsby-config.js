module.exports = {
  siteMetadata: {
    title: 'SAP Fiori',
    description: 'The home of SAP Fiori Guidelines and Community',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            path: node => node.frontmatter.path,
            tags: node => node.frontmatter.tags
          },
        },
      },
    },
    // {
    //   resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    //   options: {
    //     fields: [`title`, `data`, `tags`],
    //     resolvers: {
    //       MarkdownRemark: {
    //         data: node => {
    //           const str = node.dataString
    //           const regexp = new RegExp('(?:text":")(.+?)(?:",")', 'gi')
    //           const arr = []
    //           let result
    //           // eslint-disable-next-line no-cond-assign
    //           while ((result = regexp.exec(str))) {
    //             arr.push(result[1])
    //           }
    //           return arr.join(' ').replace(/\\n?/g, '')
    //         },
    //         tags: node => node.tags,
    //         title: node => node.data.title.text,
    //         uid: node => node.uid,
    //       },
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-purgecss', // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
