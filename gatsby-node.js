const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const webVersion = require('./src/pages/versions/web-version.json')
const iosVersion = require('./src/pages/versions/ios-version.json')
const androidVersion = require('./src/pages/versions/android-version.json')
const cuxVersion = require('./src/pages/versions/android-version.json')

const DYNAMIC_PATHS  = [ '/guideline/web/',
                      '/guideline/android/',
                      '/guideline/cux/',
                      '/guideline/ios/'];

exports.createPages = ({ actions, graphql }) => {
  const { createPage, deletePage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, 
      filter: { frontmatter: { templateKey: { ne: "left-nav" } } }
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
      },
      allVersionsJson {
          edges {
            node {
              id
              templateKey
              srcTemplateKey
              version
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
    const guidelineVersions = result.data.allVersionsJson.edges

    posts.forEach(edge => {
      const id = edge.node.id
      const version = edge.node.frontmatter.version;
      const templateKey = edge.node.frontmatter.templateKey;
      const guidelineKey = edge.node.frontmatter.templateKey.replace('-guideline','');
      const URIpath = `/guideline/${guidelineKey}`;
      if (edge.node.frontmatter.templateKey.includes('-guideline')){

        const curVersions = guidelineVersions.filter(version =>
          version.node && version.node.version && version.node.srcTemplateKey === templateKey);
        const curVersion = (curVersions[0] && curVersions[0].node && curVersions[0].node.version) ? curVersions[0].node.version : undefined;
        createPage({
          path: `${URIpath}/${String(edge.node.frontmatter.version)}/${String(edge.node.frontmatter.title)}/`,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/web-guideline-post/web-guideline-post.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            version,
            templateKey,
            curVersion          },
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
  }).then(() => {
    return DYNAMIC_PATHS.forEach((pagePath) => {
      let page = {};
      page.path = pagePath;
      let curVersion
      if (DYNAMIC_PATHS.includes(page.path)) {

        curVersion = undefined;
        if (page.path === '/guideline/web/') {
          curVersion = webVersion.version;
          page.component = path.resolve(`src/pages/guideline/web/index.js`)
        }
        if (page.path === '/guideline/ios/') {
          curVersion = iosVersion.version;
          page.component = path.resolve(`src/pages/guideline/ios/index.js`)
        }
        if (page.path === '/guideline/android/') {
          curVersion = androidVersion.version;
          page.component = path.resolve(`src/pages/guideline/android/index.js`)
        }
        if (page.path === '/guideline/cux/') {
          curVersion = cuxVersion.version;
          page.component = path.resolve(`src/pages/guideline/cux/index.js`)
        }

        // You can access the variable "curVersion" in your page queries now
        createPage({
          ...page,
          context: {
            curVersion
          },
        });

      }

    })
  })
  }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    if (node.frontmatter.templateKey.includes('-guideline')){
      const guidelineKey = node.frontmatter.templateKey.replace('-guideline','');
      const URIpath = `/guideline/${guidelineKey}`;
      const value = `${URIpath}/${String(node.frontmatter.version)}/${String(node.frontmatter.title)}/`;
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

exports.sourceNodes = ({ actions, getNodes, getNode }) => {
  const { createNodeField } = actions;
  const leftNavs = [];
  const markdownNodes = getNodes()
    .filter(node => node.internal.type === "MarkdownRemark" && node.frontmatter.templateKey == 'left-nav' )
    .forEach(node => {
      const leftNavRes = [];

      if (node.frontmatter.version) {
          let parentId = null;

            if (node.id) {
              const leftNavResObj = {};
              leftNavResObj.id = node.id;
              leftNavResObj.title = node.frontmatter.title;
              leftNavResObj.version = node.frontmatter.version;
              leftNavResObj.navTitle = true;
              leftNavResObj.slug = (node.frontmatter.uri) ? node.frontmatter.uri : '';
              leftNavResObj.parentId = null;
              // leftNavResObj.hasChildren = (node.frontmatter.leftmenu && node.frontmatter.leftmenu.menu) ? true : false;
              leftNavResObj.hasChildren = false;
              // parentId = leftNavResObj.id;
              parentId = null;
              leftNavRes.push(leftNavResObj);
              if (node.frontmatter.leftmenu){
              if (node.frontmatter.leftmenu.menu ) {
                  node.frontmatter.leftmenu.menu.forEach(menu => {

                      const guidelineNode = getNodes().find(
                        node2 =>
                          node2.internal.type === "MarkdownRemark" &&
                          node2.frontmatter.templateKey === node.frontmatter.srcTemplateKey &&
                          node2.frontmatter.title === menu.subItem &&
                          node2.frontmatter.version === node.frontmatter.version
                      );
                      if (guidelineNode) {
                    const leftNavResObj = {};
                    leftNavResObj.id = (guidelineNode.id) ? guidelineNode.id : '';
                    leftNavResObj.title = (menu.subItem) ? menu.subItem : '';
                    leftNavResObj.navTitle = false;
                    leftNavResObj.slug = (guidelineNode.fields.slug) ? guidelineNode.fields.slug : '';
                    leftNavResObj.hasChildren = (menu.submenu && menu.submenu.items) ? true : false;
                    // leftNavResObj.parentId = parentId;
                    parentId = guidelineNode.id;
                    leftNavRes.push(leftNavResObj);
                    if (menu.submenu && menu.submenu.items){

                      menu.submenu.items.forEach(item => {
                        const guidelineNode = getNodes().find(
                          node2 =>
                            node2.internal.type === "MarkdownRemark" &&
                            node2.frontmatter.templateKey === node.frontmatter.srcTemplateKey &&
                            node2.frontmatter.title === item.subItem &&
                            node2.frontmatter.version === node.frontmatter.version
                        );
                        if (guidelineNode) {
                            const leftNavResObj = {};
                            leftNavResObj.id = (guidelineNode.id) ? guidelineNode.id : '';
                            leftNavResObj.title = (item.subItem) ? item.subItem : '';
                            leftNavResObj.navTitle = false;
                            leftNavResObj.slug = (guidelineNode.fields.slug) ? guidelineNode.fields.slug : '';
                            leftNavResObj.hasChildren = false;
                            leftNavResObj.parentId = parentId;
                            leftNavRes.push(leftNavResObj);
                        }
                      })

                    }
                      }
                  })
                }
              }
            }
        }
      const id = node.id;
      leftNavs.push({id,leftNavRes});
      })

  Object.entries(leftNavs).forEach(([id, leftNavRes]) => {
    createNodeField({
      node: getNode(leftNavRes.id),
      name: "leftNavFlattened",
      value: leftNavRes.leftNavRes,
    });
  });
};


exports.onCreatePage = ({ page, actions }) => {

  const { createPage, deletePage } = actions
  let curVersion
  if (DYNAMIC_PATHS.includes(page.path)) {

    curVersion = undefined;
    curVersion = (page.path === '/guideline/web/') ?  webVersion.version : curVersion;
    curVersion = (page.path === '/guideline/ios/') ?  iosVersion.version : curVersion;
    curVersion = (page.path === '/guideline/android/') ?  androidVersion.version : curVersion;
    curVersion = (page.path === '/guideline/cux/') ?  cuxVersion.version : curVersion;

        deletePage(page)
        // You can access the variable "curVersion" in your page queries now
        createPage({
          ...page,
          context: {
            curVersion
          },
        })

  }
}
