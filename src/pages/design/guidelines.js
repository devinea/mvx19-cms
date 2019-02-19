import React from 'react';

import Flex from '../../components/Flex';
import Layout from '../../components/Layout';

import GuidelineLeftNav from '../../components/guideline-left-nav/guideline-left-nav';

import designImg from './../../img/design.png';
import { Link, StaticQuery, graphql } from 'gatsby';


const DesignGuidelineIndexPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return(
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
          <GuidelineLeftNav data={data} />
          <div
            css={{
              width: '100%'
            }}
          >
            <div
              css={{
                width: '100%',
                backgroundColor: '#f8f9fb',
                height: '682px',
                backgroundImage: 'url(' + designImg + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top right'
              }}
            />
          </div>
        </Flex>
      </Layout>
    );
            };
  
  export const pageQuery = graphql`
   query($version : String) {
    allMarkdownRemark(
      sort: { order: ASC, fields: [
        frontmatter___leftnavorder___l1,
          frontmatter___leftnavorder___l2,
          frontmatter___leftnavorder___l3,
          frontmatter___leftnavorder___l4,
      ] }
      filter: {
        frontmatter: { templateKey: { eq: "design-guideline-post" },version: {eq:$version} }
      }
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
            leftnavorder {
              l1
              l2
              l3
              l4
            }
          }
        }
      }
    }
  }
  `;

/**
 * Generates the guideline LHS navigation.
 */
export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { order: ASC, fields: [
            frontmatter___leftnavorder___l1,
              frontmatter___leftnavorder___l2,
              frontmatter___leftnavorder___l3,
              frontmatter___leftnavorder___l4,
          ] }
          filter: {
            frontmatter: { templateKey: { eq: "design-guideline-post" }, version: {eq:"1.01"} }
          }
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
                leftnavorder {
                  l1
                  l2
                  l3
                  l4
                }
              }
            }
          }
        }
      }
    `}
    render={data => <DesignGuidelineIndexPage data={data} {...props} />}
  />
);
