const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, 
      filter: { frontmatter: { templateKey: { ne: "web-left-nav" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              title
              version
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
      const version = edge.node.frontmatter.version;
      if (edge.node.frontmatter.templateKey.includes('-guideline-post')){
        createPage({
          path: `/designguideline/${String(edge.node.frontmatter.version)}/${String(edge.node.frontmatter.title)}`,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/design-guideline-post/design-guideline-post.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            version
          },
        })
      } else {

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
      }
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

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if(page.path.match(/designguideline/)) {
    page.context.layout = 'special'
    createPage(page)
  }
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    if (node.frontmatter.templateKey.includes('-guideline-post')){
      const value = `/designguideline/${String(node.frontmatter.version)}/${String(node.frontmatter.title)}`;
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    } else {
      const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    }
  }
}
