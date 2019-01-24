const _ = require('lodash')
const path = require('path')
const {
  createFilePath
} = require('gatsby-source-filesystem')
const {
  fmImagesToRelative
} = require('gatsby-remark-relative-images')

exports.createPages = ({
  actions,
  graphql
}) => {
  const {
    createPage
  } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.scrapFundamentals = () => {
  const axios = require('axios');
  let fundamentalComponents = [];
  // Make a request for a user with a given ID
  axios.get('https://api.github.com/repos/SAP/fundamental/contents/docs/pages/components')
    .then(function (response) {
      // handle success
      
      fundamentalComponents = response.data;
      const token = fundamentalComponents.filter((c) => {
        return c.name === "token.md";
      });

      axios.get('https://raw.githubusercontent.com/SAP/fundamental/develop/docs/pages/components/token.md')
      .then(function (response1) {
        // console.log(response1.data.replace('\n', ''));
        let md = response1.data
        .replace('\n', '')
        // .replace(/(\{.*?\})/gi, '```')
        .replace(/(\{% capture.*?\})/gi, '```')
        .replace(/(\{% endcapture.*?\})/gi, '```')
        .replace(/(\{%.*?\})/gi, '')
        console.log(md)
      })

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

}