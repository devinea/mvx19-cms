import React from 'react';

import Flex from '../../../components/Flex';
import { media } from '../../../components/theme';

import LeftNav from '../../../components/LeftNav';
import designImg from '../../../img/design.png';
import { graphql } from "gatsby";
import { setLhsItems } from '../../../../src/state/app.js';
import { connect } from 'react-redux';

class DesignGuidelineIndexPage extends React.Component {

  componentDidMount = () => {
    // Update the LHS Navigation.
    const { data, dispatch } = this.props;
    dispatch(setLhsItems(data.leftNav));
  }

  render() {
    const { data, location } = this.props;

    return (
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
          <LeftNav/>
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
    );
  }
}

export default connect()(DesignGuidelineIndexPage);

export const pageQuery = graphql`
    query CuxGuidelinePageQuery($curVersion: String!) {
         leftNav: allMarkdownRemark(
         filter: {
             frontmatter: { templateKey: { eq: "left-nav" }, srcTemplateKey: { eq: "cux-guideline"}, version: { eq: $curVersion } }
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
