import React from 'react';
import Flex from '../../../components/Flex';
import Layout from '../../../components/Layout';
import LeftNav from '../../../components/LeftNav';
import designImg from '../../../img/design.png';
import { Link, graphql } from 'gatsby';
import { media } from '../../../components/theme';
import ResourcesList from '../../../components/ResourceList/ResourcesList';
import Tabs from '../../../components/Tabs';
import Panel from '../../../components/Panel';
import SeeAllButton from '../../../components/SeeAllButton';
import { css } from '@emotion/core';

export default class GuidelineIosIndexPage extends React.Component {
  render() {
    const { data, location } = this.props;
    const frontmatter = data.ios.edges[0].node.frontmatter;
    const posts = data.posts.edges;
    const panels = data.panels.edges[0].node.data;

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
          <LeftNav data={data.leftNav.edges[0]} />
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
            <div css={{
              width: 828,
              margin: '0 auto',
              paddingBottom: 120,
              paddingTop: 120,
              transition: 'width 0.3s ease-in-out'
            }}>
              <h1 css={css`
              color: #4F4F4F;
              font-family: 72-Regular;
              font-size: 36px;
              font-weight: normal;
              letter-spacing: 0.11px;
              line-height: 43px;`}>explore Fiori for iOS</h1>
              <Tabs>
                {frontmatter.tabs.map((tab, idx) => {
                  return (
                    <div label={tab.label} key={idx}>
                      <h3 css={css`
                    color: #424242;
                    font-size: 20px;
                    font-weight: normal;
                    line-height: 32px;
                    margin-bottom: 40px;
                    `}>{tab.description}</h3>
                      <div css={css`
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: space-between;
                      `}>
                        {
                          panels.map((p) => {
                            if (p.title === tab.label) {
                              return p.data.map((info, idx) => {
                                return <Panel key={idx} data={info} />;
                              })
                            }
                            return ''
                          })
                        }
                      </div>
                      <SeeAllButton data={tab}></SeeAllButton>
                    </div>
                  );
                })}
              </Tabs>
            </div>
            <div
              css={{
                width: 984,
                margin: '0 auto',
                paddingBottom: 20,
                transition: 'width 0.3s ease-in-out'
              }}
            >
              <h1 css={css`
              color: #4F4F4F;
              font-family: 72-Regular;
              font-size: 36px;
              font-weight: normal;
              height: 43px;
              letter-spacing: 0.11px;
              line-height: 43px;
              padding: 0 76px 22px 76px;
              `}>{"what's new"}</h1>
              {posts.map((post) => {
                return (
                  <Link to={post.node.fields.slug} key={post.node.id}>
                    <div css={css`
                  height: 180px;
                  width: 984px;
                  padding: 15px 76px;
                  :hover {
                    border-radius: 7px 7px 7px 7px;
                    box-shadow: 0 0 10px 0 #E1E4E9;
                    cursor: pointer;
                  }`}>
                      <h2 css={css`
                    font-family: 72-Light;
                    font-size: 28px;
                    font-weight: 300;
                    height: 31px;
                    letter-spacing: 0;
                    margin-bottom: 15px;`}>{post.node.frontmatter.title}</h2>
                      <p css={css`
                    color: #6A6D70;
                    font-family: 72-Regular;
                    font-size: 16px;
                    font-weight: normal;
                    height: 48px;
                    line-height: 24px;
                    `}>{post.node.frontmatter.description}</p>
                      <div css={css`
                    color: #6A6D70;
                    font-family: 72-Light;
                    font-size: 14px;
                    font-weight: 300;
                    height: 16px;
                    letter-spacing: 0.04px;
                    padding: 20px 0;
                    `}>{post.node.frontmatter.date}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </Flex>
        <ResourcesList resource="ios" />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
query IosGuidelinePageQuery($curVersion: String!) {
    panels: allConceptsJson(filter: { name: { eq: "iOS" } }) {
      edges {
        node {
          name
          data {
            type
            title
            data {
              title
              image {
                src
              }
              url
            }
          }
        }
      }
    },
      leftNav: allMarkdownRemark(
          filter: {
              frontmatter: { templateKey: { eq: "left-nav" }, srcTemplateKey: { eq: "ios-guideline"}, version: { eq: $curVersion } }
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
      ios: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "ios-guideline" } } }
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
                tabs {
                  label
                  description,
                  url
                }
                tags
                featuredImage {
                  childImageSharp {
                    sizes(maxWidth: 75) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        },
        posts: allMarkdownRemark(
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
                featuredImage {
                  childImageSharp {
                    sizes(maxWidth: 75) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        }
    }`;



