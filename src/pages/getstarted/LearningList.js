import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import { colors, media } from '../../components/theme';
import Description from '../../components/Description';

import Flex from '../../components/Flex';

import Img from 'gatsby-image';

import './LearningList.scss'

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
        fontSize: 35,
        fontWeight: 700,
        color: colors.gray_600,
        marginBottom: 50
      }}
      >
        before you begin
      </h1>
          <div>
          {posts.map(({ node: post }) => (
            <Link to={post.fields.slug} key={post.id}>
                <div className="learning-items">
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
                    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                  </div>
                  <Flex
                  direction='column'
                  css={{
                    paddingLeft: 50
                  }}
                  >
                    <div
                      css={{
                        fontSize: 24,
                        fontWeight: 700,
                        lineHeight: '27px',
                        paddingBottom: 12,
                        color: colors.gray_600
                      }}
                    >
                      {post.frontmatter.title}
                    </div>
                    <div
                      css={{
                        fontSize: 18,
                        fontWeight: 300,
                        lineHeight: '22px',
                        paddingBottom: 20,
                        color: colors.gray_300
                      }}
                    >
                      {post.frontmatter.description}
                    </div>
                    <div
                      css={{
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: '16px',
                        color: colors.gray_300
                      }}
                    >
                      5 min read
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
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }`}
      render={(data) => <LearningList data={data} {...props} /> }
    />
  )