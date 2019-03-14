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
        typeName: ({ node, object, isArray }) => object.name || 'Json'
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
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img/controls`,
        name: 'uploads_controls'
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img/views`,
        name: 'uploads_views'
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img/patterns`,
        name: 'uploads_patterns'
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img/floorplans`,
        name: 'uploads_floorplans'
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
      resolve: 'gatsby-plugin-layout',
      options: {
          component: require.resolve('./src/components/Layout/index.js')
      }
    },     
    {
      resolve: `gatsby-plugin-elasticlunr-search-fiori`,
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
                case 'web-guideline': {
                  templateKeyName = 'Fiori for Web';
                  break;
                }
                case 'ios-guideline': {
                  templateKeyName = 'Fiori for IOS';
                  break;
                }
                case 'android-guideline': {
                  templateKeyName = 'Fiori for Android';
                  break;
                }
                case 'cux-guideline': {
                  templateKeyName = 'Fiori for CUX';
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
            picture: node => node.frontmatter.picture,
            description: node => node.frontmatter.description,
            version: node => node.frontmatter.version,

            tags: node => node.frontmatter.tags,

          },
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
        tableOfContents: {
          maxDepth: 3,
        },
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
          },
          'gatsby-remark-embed-video',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: `100`,
            },
          },
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
