import React from 'react';

import Flex from '../../../components/Flex';
import Layout from '../../../components/Layout';
import { media } from '../../../components/theme';

import LeftNav from '../../../components/LeftNav';
import designImg from '../../../img/design.png';
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
          <LeftNav data={(data.leftNav)}/>
          <div
            css={{
              width: '100%',
              [media.lessThan('large')]: {
                marginTop: '50px'
              }              
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
    query WebGuidelinePageQuery($curVersion: String!) {
         leftNav: allMarkdownRemark(
         filter: {
             frontmatter: { templateKey: { eq: "left-nav" }, srcTemplateKey: { eq: "web-guideline"}, version: { eq: $curVersion } }
         }
     ) {
         edges {
             node {
                 id
                 fields{
                     leftNavFlattened {
                         id
                         slug
                         title
                         parentId
                         hasChildren
                         navTitle
                     }
                 }

             }
         }
     }
    }
`;
