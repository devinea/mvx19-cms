import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Flex from '../../components/Flex';
import Layout from '../../components/Layout';

import { sharedStyles } from '../../components/theme';

import Content, { HTMLContent } from '../../components/Content';
import GuidelineLeftNav from '../../components/guideline-left-nav/guideline-left-nav';

export const DesignGuidelinePostTemplate = ({
  content,
  contentComponent,
  description,
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

const DesignGuidelinePost = ({ data, location }) => {
  const { markdownRemark: post } = data;

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
          height: '100%'
        }}
      >
        <GuidelineLeftNav data={data.leftNav} />
        <div
          css={{
            width: '100%',
            paddingLeft: 20,
            paddingBottom: 20
          }}
        >
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
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
          />
        </div>
      </Flex>
    </Layout>
  );
};

DesignGuidelinePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default DesignGuidelinePost;

export const pageQuery = graphql`
  query DesignGuidelinePostByID($id: String!, $version: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    },
    leftNav: allMarkdownRemark(
          sort: { order: ASC, fields: [
            frontmatter___leftnavorder___l1,
              frontmatter___leftnavorder___l2,
              frontmatter___leftnavorder___l3,
              frontmatter___leftnavorder___l4,
          ] }
          filter: {
            frontmatter: { templateKey: { eq: "design-guideline-post" }, version: { eq: $version } }
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
