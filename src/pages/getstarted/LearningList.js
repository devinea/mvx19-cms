import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { colors, media } from '../../components/theme';
import Flex from '../../components/Flex';

class LearningList extends React.Component {
    render() {

    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

      return (
        <section
        css={{
          paddingTop: 50,
          width: '100%',
          [media.greaterThan('medium')]: {
            padding: '0 68px 80px'
          },
          [media.greaterThan('large')]: {
            padding: '0 71px 80px'
          },
          [media.greaterThan('xlarge')]: {
            padding: '0 84px 80px'
          }
        }}>
        <h1
        css={{
        width: '100%',
        fontSize: 36,
        fontWeight: 'normal',
        color: colors.gray_600,
        marginBottom: 50
      }}
      >
        before you begin
      </h1>
          <div>
          {posts.map(({ node: post }) => (
            <Link to={post.fields.slug} key={post.id}>
                <div
                css={{
                  ':hover': {
                    boxShadow: '1px 1px 10px 1px rgba(0, 0, 0, 0.30)'
                  }
                }}
                >
                <Flex
                  css={{
                    width: '100%',
                    paddingBottom: 30,
                    paddingTop: 35
                  }}
                >
                  <div
                    css={{
                      textAlign: 'right',
                      [media.greaterThan('large')]: {
                        minWidth: 118
                      },
                      [media.greaterThan('xlarge')]: {
                        minWidth: 144
                      }
                    }}
                  >
                    <img src={post.frontmatter.featuredImage.publicURL} />
                  </div>
                  <Flex
                  direction='column'
                  css={{
                    paddingLeft: 50
                  }}
                  >
                    <div
                      css={{
                        fontSize: 28,
                        fontWeight: 300,
                        lineHeight: '31px',
                        paddingBottom: 12,
                        color: colors.gray_700
                      }}
                    >
                      {post.frontmatter.title}
                    </div>
                    <div
                      css={{
                        fontSize: 16,
                        fontWeight: 'normal',
                        lineHeight: '24px',
                        paddingBottom: 20,
                        color: colors.gray_500
                      }}
                    >
                      {post.frontmatter.description}
                    </div>
                  </Flex>
                </Flex>
                </div>
            </Link>
          ))}
          </div>
        </section>
      )
    }
  }
  
  
  export default props => (
    <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: {frontmatter: {templateKey: {eq: "learning-post"}}}) {
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
                featuredImage {
                  id
                  publicURL
                }
              }
            }
          }
        }
      }`}
      render={(data) => <LearningList data={data} {...props} /> }
    />
  )