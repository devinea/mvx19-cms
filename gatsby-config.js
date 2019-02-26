module.exports = {
  siteMetadata: {
    title: 'SAP Fiori',
    description: 'The home of SAP Fiori Guidelines and Community',
    contact: {
      email: 'fioriexperience@sap.com'
    },
    footer: {
      links: [
        {
          id: 'privacy',
          title: 'Privacy',
          url: 'http://www.sap.com'
        },
        {
          id: 'legal',
          title: 'Legal disclosure',
          url: 'http://www.sap.com'
        },
        {
          id: 'copyright',
          title: 'Copyright and Trademarks',
          url: 'http://www.sap.com'
        },
        {
          id: 'terms',
          title: 'Terms of Use',
          url: 'http://www.sap.com'
        }
      ]
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {}
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node, object, isArray }) => object.name
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
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
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `slug`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            templateKeyName: node => {
              let templateKeyName = '';
              switch (node.frontmatter.templateKey) {
                case 'blog-post': {
                  templateKeyName = 'News';
                  break;
                }
                case 'design-guideline-post': {
                  templateKeyName = 'Fiori for Web';
                  break;
                }
                case 'developer-guideline-post': {
                  templateKeyName = 'Fiori for Web';
                  break;
                }
                default: {
                  templateKeyName = 'Page';
                  break;
                }
              }
              return templateKeyName;
            },
            title: node => node.frontmatter.title,
            path: node => node.fields.slug,
            featuredImage: node => node.frontmatter.featuredImage,
            description: node => node.frontmatter.description,

            tags: node => node.frontmatter.tags
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-embed-video',
          'gatsby-remark-responsive-iframe'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`, // must be after other CSS plugins
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['react-dropdown/style.css'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
