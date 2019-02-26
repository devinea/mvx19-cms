import React from 'react';

import Flex from '../../components/Flex';
import Layout from '../../components/Layout';

import LeftNav from '../../components/LeftNav';
import designImg from './../../img/design.png';
import { graphql } from "gatsby";

export default class DesignGuidelineIndexPage extends React.Component {
  render() {
    const { data, location } = this.props;

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
          <LeftNav title="Fiori For Web" data={data.leftNav}/>
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
  }
}

export const pageQuery = graphql`
  query {
    leftNav: allMarkdownRemark(
          sort: { order: ASC, fields: [
            frontmatter___leftnavorder___l1,
              frontmatter___leftnavorder___l2,
              frontmatter___leftnavorder___l3,
              frontmatter___leftnavorder___l4,
          ] }
          filter: {
            frontmatter: { templateKey: { eq: "design-guideline-post" }, version: { eq: "1.01" } }
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
    }`;
