const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const webVersion = require('./src/pages/versions/web-version.json')
const iosVersion = require('./src/pages/versions/ios-version.json')
const androidVersion = require('./src/pages/versions/android-version.json')
const cuxVersion = require('./src/pages/versions/android-version.json')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

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
      const controls = {};
      const views = {};
      const patterns = {};
      const floorplans = {};
      controls.title = 'Controls';
      views.title = 'Views';
      floorplans.title = 'Floorplans';
      patterns.title = 'Patterns';

      controls.type = 'controls';
      views.type = 'views';
      floorplans.type = 'floorplans';
      patterns.type = 'patterns';

      controls.type = 'controls';
      views.type = 'views';
      floorplans.type = 'floorplans';
      patterns.type = 'patterns';

      controls.desc = 'A user interface (UI) control is a visual element on a computer screen that helps humans to interact with the underlying software.';
      views.desc = 'View is a fundamental building block of the Fiori for iOS design language. It is a container for which information can be displayed.';
      floorplans.desc = 'Floorplan is a hub that provides previews of larger bodies of information sourced from different parts of the app.';
      patterns.desc = 'With effortless interaction patterns, the SAP Fiori UX is designed for a powerful impact across your enterprise.';

      controls.slug = '/guideline/ios/1.02/Controls/';
      views.slug = '/guideline/ios/1.02/Views/';
      floorplans.slug = '/guideline/ios/1.02/Floorplans/';
      patterns.slug = '/guideline/ios/1.02/Patterns/';

      controls.tiles = [      {
        "img": "file.png",
        "name": "title",
        "slug": "https://",
        "id": ""
      }];
      views.tiles = [      {
        "img": "file.png",
        "name": "title",
        "slug": "https://",
        "id": ""
      }];
      floorplans.tiles = [      {
        "img": "file.png",
        "name": "title",
        "slug": "https://",
        "id": ""
      }];
      patterns.tiles = [      {
        "img": "file.png",
        "name": "title",
        "slug": "https://",
        "id": ""
      }];

      if (node.frontmatter.version) {
          let parentId = null;
          let explorerTileObj = {};
        explorerTileObj.tiles = [];

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
                      if (menu.subItem.category) {
                        explorerTileObj.type = menu.subItem.category;
                        explorerTileObj.title = menu.subItem;
                      }
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
                            const tileObj = {};
                            leftNavResObj.id = (guidelineNode.id) ? guidelineNode.id : '';
                            leftNavResObj.title = (item.subItem) ? item.subItem : '';
                            leftNavResObj.navTitle = false;
                            leftNavResObj.slug = (guidelineNode.fields.slug) ? guidelineNode.fields.slug : '';
                            leftNavResObj.hasChildren = false;
                            leftNavResObj.parentId = parentId;
                            leftNavRes.push(leftNavResObj);


                            tileObj.title = leftNavResObj.title;
                            tileObj.slug = leftNavResObj.slug;
                            // TODO - Replace with gatsby-mage
                            tileObj.img = guidelineNode.frontmatter.featuredImage;

                            if (explorerTileObj && tileObj)
                            explorerTileObj.tiles.push(tileObj)
                        }
                      })

                      if (explorerTileObj && explorerTileObj.type === 'controls' ){
                        controls.push(explorerTileObj);
                      }
                      if (explorerTileObj && explorerTileObj.type === 'views' ){
                        views.push(explorerTileObj);
                      }
                      if (explorerTileObj && explorerTileObj.type === 'patterns' ){
                        patterns.push(explorerTileObj);
                      }
                      if (explorerTileObj && explorerTileObj.type === 'floorplans' ){
                        floorplans.push(explorerTileObj);
                      }
                      }
                      }
                  })
                }
              }
            }
        }
      const id = node.id;

      leftNavs.push({id,leftNavRes, controls, views, patterns, floorplans});

      })

  Object.entries(leftNavs).forEach(([id, leftNavRes]) => {
    createNodeField({
      node: getNode(leftNavRes.id),
      name: "leftNavFlattened",
      value: leftNavRes.leftNavRes,
    });
    createNodeField({
      node: getNode(leftNavRes.id),
      name: "controls",
      value: leftNavRes.controls,
    });
    createNodeField({
      node: getNode(leftNavRes.id),
      name: "views",
      value: leftNavRes.views,
    });
    createNodeField({
      node: getNode(leftNavRes.id),
      name: "patterns",
      value: leftNavRes.patterns,
    });
    createNodeField({
      node: getNode(leftNavRes.id),
      name: "floorplans",
      value: leftNavRes.floorplans,
    });
  });
};


exports.onCreatePage = ({ page, actions }) => {

  const { createPage, deletePage } = actions
  let curVersion
  if (page.path === '/guideline/web/' ||
      page.path === '/guideline/android/' ||
      page.path === '/guideline/cux/' ||
      page.path === '/guideline/ios/') {

    curVersion = undefined;
    curVersion = (page.path === '/guideline/web/') ?  webVersion.version : curVersion;
    curVersion = (page.path === '/guideline/ios/') ?  iosVersion.version : curVersion;
    curVersion = (page.path === '/guideline/android/') ?  androidVersion.version : curVersion;
    curVersion = (page.path === '/guideline/cux/') ?  cuxVersion.version : curVersion;

        deletePage(page)
        // You can access the variable "house" in your page queries now
        createPage({
          ...page,
          context: {
            curVersion
          },
        })

  }
}
