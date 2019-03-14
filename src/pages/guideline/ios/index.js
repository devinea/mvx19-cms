import React from 'react';
import Flex from '../../../components/Flex';
import LeftNav from '../../../components/LeftNav';
import iosBackground from '../../../img/ios_background.png';
import { Link, graphql } from 'gatsby';
import { media, colors } from '../../../components/theme';
import ResourcesList from '../../../components/ResourceList/ResourcesList';
import Tabs from '../../../components/Tabs';
import Panel from '../../../components/Panel';
import SeeAllButton from '../../../components/SeeAllButton';
import { css } from '@emotion/core';

export default class GuidelineIosIndexPage extends React.Component {
  render() {
    const { data, location, pageContext} = this.props;
    const posts = data.posts.edges;
    const explore = data.explore.edges;
    const panels = data.tabs.edges;

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
                backgroundColor: '#f8f9fb',
                height: 400,
                backgroundImage: 'url(' + iosBackground + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'calc(50% + 400px)',
                backgroundSize: '906px 400px'
              }}
            >
              <div css={{
                width: 828,
                margin: '0 auto',
                paddingBottom: 60,
                paddingTop: 40
              }}>
              <h1 css={{
                      color: colors.gray_600,
                      fontSize: 45,
                      fontWeight: 300,
                      paddingTop: 30,
                      width: '36%'
                    }}>Design and Develop delightful iOS mobile apps.</h1>
              </div>
            </div>
            <div css={{
              width: 828,
              margin: '0 auto',
              paddingBottom: 60,
              paddingTop: 40,
              transition: 'width 0.3s ease-in-out'
            }}>
              <h1 css={css`
              color: ${colors.gray_600};
              font-family: 72-Regular;
              font-size: 36px;
              font-weight: normal;
              letter-spacing: 0.11px;
              line-height: 43px;`}>explore Fiori for iOS</h1>
              <Tabs>
                {panels.map((tab, idx) => {
                  return (
                    <div label={tab.node.title} key={idx}>
                      <h3 css={css`
                    color: ${colors.gray_600};
                    font-size: 20px;
                    font-weight: normal;
                    line-height: 32px;
                    margin-bottom: 40px;
                    `}>{tab.node.desc}</h3>
                      <div css={css`
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: space-between;
                      `}>
                        {

                          explore.map((p, panelIdx) => {
                            if (p.node.frontmatter.categories && p.node.frontmatter.categories.includes(tab.node.title)) {
                               return <Panel key={panelIdx} data={p.node} />;
                            }
                            return ''
                          })
                        }
                      </div>
                      <SeeAllButton link={`${location.pathname}/${pageContext.curVersion}/${tab.node.title}`} text={tab.node.title}></SeeAllButton>
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
              color: ${colors.gray_600};
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
                    box-shadow: 0 0 10px 0 ${colors.gray_200};
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
                    color: ${colors.gray_700};
                    font-family: 72-Regular;
                    font-size: 16px;
                    font-weight: normal;
                    height: 48px;
                    line-height: 24px;
                    `}>{post.node.frontmatter.description}</p>
                      <div css={css`
                    color: ${colors.gray_700};
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
          <ResourcesList resource="ios" />
        </Flex>
    );
  }
}

export const pageQuery = graphql`
    query IosGuidelinePageQuery($curVersion: String!) {
        tabs: allCategoriesJson (sort: {order: ASC, fields: [ordinal]}){
            edges {
                node {
                    title
                    desc
                    ordinal
                }
            }
        },
        leftNav: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "left-nav"}, srcTemplateKey: {eq: "ios-guideline"}, version: {eq: $curVersion}}}) {
            edges {
                node {
                    id
                    fields {
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
        explore: allMarkdownRemark(limit: 24, sort: {order: ASC, fields: [frontmatter___title]}, filter: {frontmatter: {templateKey: {eq: "ios-guideline"}, onOverview: {eq: true}}}) {
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
                        categories
                        tags
                        picture {
                            childImageSharp {
                                sizes(maxWidth: 260, maxHeight: 125) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
        posts: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
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
                        picture {
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
    }
`;



