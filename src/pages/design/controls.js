import React from 'react'
import Layout from '../../components/Layout'
import GuidelineLeftNav from '../../components/guideline-left-nav/guideline-left-nav';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Flex from '../../components/Flex';
import { css } from '@emotion/core'

class DesignControlsIndexPage extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <Flex
          direction='row'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
            width: '100%',
          }}
        >
         
          <section css={
            css`
            float: left;
            width: 100%;
            `
          } >
            <h2>Controls</h2>
            {this.props.data.allMarkdownRemark.edges
              .map(({ node: data }) => (
                <Link css={css`
              float: left;
              width: 50%;
              height: 200px;
              background-position: center center;
              background-repeat: no-repeat;
              border: 1px black solid;
              transform: translateZ(0);
              `} key={data.id} to={data.fields.slug} >
                  <Img css={css`max-height: 90%;`} imgStyle={{ 'objectFit': 'contain' }}
                    sizes={data.frontmatter.featuredImage.childImageSharp.sizes} />
                  <div css={
                    css`
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    position: fixed;
                    `
                  }>{data.frontmatter.title}</div>
                </Link>
              ))}
          </section>
        </Flex>
      </Layout>
    )
  }
}


export default props => (
  <StaticQuery
    query={graphql`{
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] },
      filter: { frontmatter: {
        templateKey: { eq: "design-guideline-post" }
        iscontrol: { eq: true }
        }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            iscontrol
             featuredImage {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }`}
    render={(data) => <DesignControlsIndexPage data={data} {...props} />}
  />
)
