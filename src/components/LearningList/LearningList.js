import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { colors, media } from '../theme';
import Flex from '../Flex';

class LearningList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section
        css={{
          width: '100%',
          [media.lessThan('medium')]: {
            padding: 0
          },
          [media.greaterThan('medium')]: {
            paddingTop: 50,
            padding: '0 68px 80px'
          },
          [media.greaterThan('large')]: {
            paddingTop: 50,
            padding: '0 71px 80px'
          },
          [media.greaterThan('xlarge')]: {
            paddingTop: 50,
            padding: '0 84px 80px'
          }
        }}
      >
        <h1
          css={{
            width: '100%',
            fontSize: 30,
            fontWeight: 'normal',
            color: colors.gray_600,
            marginBottom: 50
          }}
        >
          before you begin
        </h1>
        <div>
          {posts.map(({ node: post }) => (
            <Link
              to={post.fields.slug}
              key={post.id}
              css={{
                display: 'block',
                [media.lessThan('large')]: {
                  paddingTop: 20,
                  ':not(:last-child)': {
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    borderBottomColor: colors.gray_200
                  }
                },
                [media.greaterThan('large')]: {
                  paddingBottom: 5,
                  paddingTop: 5
                }
              }}
            >
              <div
                css={{
                  display: 'inline-block',
                  width: '100%',
                  [media.greaterThan('large')]: {
                    borderRadius: 7,
                    paddingBottom: 30,
                    paddingTop: 30,
                    ':hover': {
                      boxShadow: '0 0 22px 0 rgba(0, 0, 0, 0.10)'
                    }
                }
                }}
              >
                <div
                  css={{
                    float: 'left',
                    textAlign: 'center',
                    [media.greaterThan('medium')]: {
                      maxWidth: 120,
                      width: '100%'
                    },
                    [media.greaterThan('large')]: {
                      maxWidth: 120,
                      width: '100%'
                    },
                    [media.greaterThan('xlarge')]: {
                      maxWidth: 144,
                      width: '100%'
                    },
                    [media.lessThan('medium')]: {
                      float: 'right'
                    }
                  }}
                >
                  <img src={post.frontmatter.picture.publicURL} />
                </div>
                <div
                  css={{
                    [media.greaterThan('medium')]: {
                      float: 'left',
                      maxWidth:
                        media.getSize('medium').column * 4 +
                        media.getSize('medium').gutter * 3,
                      width: '100%',
                      paddingLeft: media.getSize('medium').gutter
                    },
                    [media.greaterThan('large')]: {
                      float: 'left',
                      maxWidth:
                        media.getSize('large').column * 8 +
                        media.getSize('large').gutter * 7,
                      width: '100%',
                      paddingLeft: media.getSize('large').gutter
                    },
                    [media.greaterThan('xlarge')]: {
                      float: 'left',
                      maxWidth:
                        media.getSize('xlarge').column * 8 +
                        media.getSize('xlarge').gutter * 7,
                      width: '100%',
                      paddingLeft: media.getSize('xlarge').gutter
                    }
                  }}
                >
                  <div
                    css={{
                      fontSize: 24,
                      fontWeight: 'normal',
                      lineHeight: '33px',
                      paddingBottom: 12,
                      color: colors.gray_600,
                      [media.greaterThan('small')]: {
                        fontWeight: 300
                      }
                    }}
                  >
                    {post.frontmatter.title}
                  </div>
                  <div
                    css={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      lineHeight: '25px',
                      paddingBottom: 20,
                      color: colors.gray_500,
                      [media.greaterThan('small')]: {
                        fontWeight: 300
                      }
                    }}
                  >
                    {post.frontmatter.description}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "learning-post" } } }
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
                picture {
                  id
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => <LearningList data={data} {...props} />}
  />
);
