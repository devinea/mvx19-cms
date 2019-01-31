import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Flex from '../../components/Flex';
import Layout from '../../components/Layout';

import Content, { HTMLContent } from '../../components/Content';
import './developer-guideline-post.scss';
import GuidelineHeader from '../../components/guideline-header/guideline-header';
import GuidelineLeftNav from '../../components/guideline-left-nav/guideline-left-nav';

export const DeveloperGuidelinePostTemplate = ({
  location,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Layout location={location}>
      <GuidelineHeader />
      <Flex
        direction='row'
        shrink='0'
        grow='1'
        overflow='auto'
        valign='stretch'
        css={{
          width: '100%'
        }}
      >
        <GuidelineLeftNav />
        <div
          css={{
            width: '100%',
            paddingLeft: 20,
            paddingBottom: 20
          }}
        >
          <section className='section guidelines-post'>
            {helmet || ''}
            <div className='container content'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
                    {title}
                  </h1>
                  <p>{description}</p>
                  <PostContent content={content} />
                  {tags && tags.length ? (
                    <div style={{ marginTop: `4rem` }}>
                      <h4>Tags</h4>
                      <ul className='taglist'>
                        {tags.map(tag => (
                          <li key={tag + `tag`}>
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Flex>
    </Layout>
  );
};

DeveloperGuidelinePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const DeveloperGuidelinePost = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <DeveloperGuidelinePostTemplate
      location={location}
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
  );
};

DeveloperGuidelinePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default DeveloperGuidelinePost;

export const pageQuery = graphql`
  query DeveloperGuidelinePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
