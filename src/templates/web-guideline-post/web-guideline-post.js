import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Filter from '../../components/Filter/Filter.js';
import Flex from '../../components/Flex';

import { sharedStyles, media } from '../../components/theme';

import Content, { HTMLContent } from '../../components/Content';
import LeftNav from '../../components/LeftNav';
import { setLhsItems } from '../../../src/state/app.js';
import { connect } from 'react-redux';


export const DesignGuidelinePostTemplate = ({
  content,
  contentComponent,
  description,
  tableOfContents,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <article
      css={{
        paddingRight: 20
      }}
    >
      {helmet || ''}

      <div css={[sharedStyles.markdown]}>
        <h1>{title}</h1>
        <p>{description}</p>

        {tableOfContents ? <PostContent content={"<h1 id='ToC'>Table Of Contents</h1>"+tableOfContents || ''}/> : null}
        <PostContent content={content} />

        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Tags</h4>
            <ul>
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
};

DesignGuidelinePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};


class WebGuidelinePost extends React.Component {

  componentDidMount = () => {
    // Update the LHS Navigation.
    const { data, dispatch } = this.props;
    dispatch(setLhsItems(data.leftNav));
  }

  render() {
    const { data, location, pageContext } = this.props;
    const { markdownRemark: post, guidelineVersions} = data;
    return (
      <Flex
        direction='row'
        shrink='0'
        grow='1'
        overflow='auto'
        valign='stretch'
        css={{
          width: '100%',
          height: '100%'
        }}
      >
        <LeftNav/>
        <div id="design-guideline-div"
          css={{
            width: 828,
            margin: '0 auto',
            paddingBottom: 20,
            transition: 'width 0.3s ease-in-out',
            [media.lessThan('large')]: {
              marginTop: '50px'
            }
          }}
        >
          <Filter location={location} pageContext= {pageContext} versions={guidelineVersions}/>
          <DesignGuidelinePostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
              <Helmet titleTemplate='%s | Blog'>
                <title>{`${post.frontmatter.title}`}</title>
                <meta
                  name='description'
                  content={`${post.frontmatter.description}`}
                />
              </Helmet>
            }
            tableOfContents={post.tableOfContents}
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
          />
        </div>
      </Flex>
    )
  };
};

WebGuidelinePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default connect()(WebGuidelinePost);

export const pageQuery = graphql`
  query DesignGuidelinePostByID($id: String!, $version: String!, $templateKey: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      tableOfContents(
            maxDepth: 1
        )
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    },
    leftNav: allMarkdownRemark(
        filter: {
            frontmatter: { templateKey: { eq: "left-nav" }, srcTemplateKey: { eq: $templateKey }, version: { eq: $version } }
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
      },
      guidelineVersions: allMarkdownRemark(
          sort: {order: ASC, fields: [frontmatter___version]},
          filter: {frontmatter: {templateKey: {eq: $templateKey }}}) {
          edges {
           node {
           frontmatter {
           version
           }
           }
           }
      }
  }
`;
