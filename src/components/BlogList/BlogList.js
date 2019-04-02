import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Blog from '../../components/Blog';
import { colors, media } from '../../components/theme';

class BlogList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: blogs } = data.allMarkdownRemark;

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
              paddingBottom: 0
            },
            [media.greaterThan('large')]: {
              paddingTop: 0,
              paddingBottom: 0
            },
            [media.greaterThan('xlarge')]: {
              fontSize: 36,
              fontWeight: 700,
              paddingTop: 0,
              paddingBottom: 0
            }
          }}
        >
          {"What's new"}
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
          {blogs.map(({ node: blog }, index) => (
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
                    sizes(maxWidth: 120, maxHeight: 120) {
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
