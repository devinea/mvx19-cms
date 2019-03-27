import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Post from '../../components/Post';

import { colors, media } from '../../components/theme';

class LearningList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section
        css={{
          width: '100%'
        }}
      >
        <h1
          css={{
            width: '100%',
            fontSize: 30,
            lineHeight: '43px',
            fontWeight: 'normal',
            color: colors.gray_700,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 40,
            margingLeft: 0,
            [media.lessThan('medium')]: {
              padding: 0,
              marginBottom: 10
            },
            [media.greaterThan('medium')]: {
              paddingTop: 0,
              paddingRight:
                media.getSize('medium').column +
                media.getSize('medium').gutter,
              paddingBottom: 0,
              paddingLeft:
                media.getSize('medium').column +
                media.getSize('medium').gutter
            },
            [media.greaterThan('large')]: {
              paddingTop: 0,
              paddingRight:
                media.getSize('large').column +
                media.getSize('large').gutter,
              paddingBottom: 0,
              paddingLeft:
                media.getSize('large').column +
                media.getSize('large').gutter
            },
            [media.greaterThan('xlarge')]: {
              fontSize: 36,
              fontWeight: 700,
              paddingTop: 0,
              paddingRight:
                media.getSize('xlarge').column +
                media.getSize('xlarge').gutter,
              paddingBottom: 0,
              paddingLeft:
                media.getSize('xlarge').column +
                media.getSize('xlarge').gutter
            }
          }}
        >
          Before you begin
        </h1>
        <div
          css={{
            [media.lessThan('medium')]: {
              paddingBottom: 20
            },
            [media.greaterThan('medium')]: {
              paddingBottom: 80
            },
            [media.greaterThan('large')]: {
              paddingBottom: 100
            },
            [media.greaterThan('xlarge')]: {
              paddingBottom: 100
            }
          }}
        >
          {posts.map(({ node: post }) => (
            <Post
              svg={post.frontmatter.picture.publicURL}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              url={post.fields.slug}
              key={post.id}
            />
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
