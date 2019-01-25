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
	const fs = require('fs');

	let fundamentalComponents = [];
	// Make a request for a user with a given ID
	axios.get('https://api.github.com/repos/SAP/fundamental/contents/docs/pages/components')
		.then((response) => {
			fundamentalComponents = response.data;
			const token = fundamentalComponents.filter((c) => {
				return c.name === "token.md";
			});
		})
		.catch((error) => {
			console.log(error);
		})
		.then(() => {
			fundamentalComponents.forEach((f) => {
				axios.get(f.download_url)
					.then((response) => {
						let md = response.data
							.replace('\n', '')
							// .replace(/(\{.*?\})/gi, '```')
							.replace(/(\{% capture.*?\})/gi, '```')
							.replace(/(\{% endcapture.*?\})/gi, '```')
							.replace(/(\{%.*?\})/gi, '')

						var props = md.split('---\n')[0].replace('---', '').trim().split('\n')
							.map((p) => {
								var c = {}
								var i = p.indexOf(':')
								var key = p.substring(0, i);
								c[key] = p.substring(i + 1, p.length).trim()
								return c
							})

						const metadata = {};
						props.forEach((p) => {
							if (Object.keys(p)[0] === 'title') metadata['title'] = p['title']
							if (Object.keys(p)[0] === 'keywords') metadata['keywords'] = p['keywords'].split(',')
						})

						let woFundamentalsMeta = md.substring(3, md.length)
						woFundamentalsMeta = woFundamentalsMeta.substring(woFundamentalsMeta.indexOf('---'), woFundamentalsMeta.length).replace('---', '')
						metadata['description'] = woFundamentalsMeta.split('{: .docs-intro}')[0].replace(/(\r\n|\n|\r)/gm, "");

						let experienceMeta = `
                      ---
                      templateKey: design-guideline-post
                      title: ${metadata['title']}
                      description: ${metadata['description']}
                      date: ${new Date().toISOString()}
                      tags:
                      - ${metadata['keywords'][0]}
                      ---`;

						experienceMeta = experienceMeta.replace(/^ +/gm, '')
						experienceMeta = experienceMeta.replace('- ', '  - ')

						const re = /```([\S\s]*?)```/;
						const htmlExample = woFundamentalsMeta.match(re)[0].replace('\n', '').replace(/```/g, '');

						const removeIntroIdx = woFundamentalsMeta.indexOf('{: .docs-intro}')
						woFundamentalsMeta = woFundamentalsMeta.substring(removeIntroIdx + 15, woFundamentalsMeta.length);
						let completeMd = `${experienceMeta} <br> ${htmlExample} ${woFundamentalsMeta}`
						completeMd = completeMd.split('\n').slice(1).join('\n');

						fs.writeFile(__dirname + '/src/pages/designguideline/' + `${metadata['title']}.md`, completeMd, (err) => {
							// throws an error, you could also catch it here
							if (err) throw err;
							// success case, the file was saved
							console.log('File ready!');
						});
					})
			})
		});

}