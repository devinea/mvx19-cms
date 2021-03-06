import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SVG from 'react-inlinesvg';

import Blog from '../../components/Blog';
import Flex from '../../components/Flex';
import { colors, media } from '../../components/theme';

class NewsList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: blogs } = data.allMarkdownRemark;

    return (
      <section
        css={{
          width: '100%'
        }}
      >
        <Flex
          direction='column'
          css={{
            margin: '0 auto',
            [media.greaterThan('small')]: {
              minWidth: media.getSize('small').width,
              maxWidth: media.getSize('small').width
            },
            [media.greaterThan('medium')]: {
              minWidth: media.getSize('medium').width,
              maxWidth: media.getSize('medium').width
            },
            [media.greaterThan('large')]: {
              minWidth: media.getSize('large').width,
              maxWidth: media.getSize('large').width
            },
            [media.greaterThan('xlarge')]: {
              minWidth: media.getSize('xlarge').width,
              maxWidth: media.getSize('xlarge').width
            }
          }}
        >
          <h1
            css={{
              width: '100%',
              fontSize: 40,
              lineHeight: '50px',
              fontFamily: '"72-Light"',
              fontWeight: 300,
              color: colors.gray_700,
              marginTop: 40,
              marginRight: 0,
              marginBottom: 30,
              marginLeft: 0,
              [media.greaterThan('xlarge', true)]: {
                fontSize: 40,
                lineHeight: '50px',
              },
              [media.between('large', 'xlarge', true)]: {
                fontSize: 32,
                lineHeight: '45px',
                paddingLeft:
                  media.getSize('large').column +
                  media.getSize('large').gutter
              },
              [media.between('medium', 'large', true)]: {},
              [media.lessThan('medium', true)]: {}
            }}
          >
            What's new
          </h1>
          <div
            css={{
              [media.lessThan('medium')]: {
                paddingBottom: 20
              },
              [media.greaterThan('medium')]: {
                paddingBottom: 50
              },
              [media.greaterThan('large')]: {
                paddingBottom: 50
              },
              [media.greaterThan('xlarge')]: {
                paddingBottom: 50
              }
            }}
          >
          {blogs.map(({ node: blog }, index ) => (
              <Blog
                index={index}
                image={
                  blog.frontmatter.picture
                    ? blog.frontmatter.picture.childImageSharp.sizes
                    : null
                }
                tags={blog.frontmatter.tags}
                title={blog.frontmatter.title}
                description={blog.frontmatter.description}
                date={blog.frontmatter.date}
                url={blog.fields.slug}
                key={blog.id}
              />
            ))}
          </div>
        </Flex>
      </section>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                date(formatString: "MMMM DD, YYYY")
                tags
                picture {
                  childImageSharp {
                    sizes(maxWidth: 120) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <NewsList data={data} {...props} />}
  />
);
