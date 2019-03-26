import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Post from '../../components/Post';

import { colors, media } from '../../components/theme';

class BlogList extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

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
              paddingBottom: 0,
            },
            [media.greaterThan('large')]: {
              paddingTop: 0,
              paddingBottom: 0,
            },
            [media.greaterThan('xlarge')]: {
              fontSize: 36,
              fontWeight: 700,
              paddingTop: 0,
              paddingBottom: 0,
            }
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
              type="blog"
              png={post.frontmatter.picture.childImageSharp.sizes}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              url={post.fields.slug}
              key={post.id}
              date={post.frontmatter.date}
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
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
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
                        childImageSharp {
                            sizes(maxWidth: 75) {
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
    render={data => <BlogList data={data} {...props} />}
  />
);
